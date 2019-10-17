import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeShow extends React.Component{

    constructor(props){
      super(props);

      this.state = {};
      this.host = {};
      this.star ={};
      console.log(this.props.currentUser);

      this.checkNotEmpty = this.checkNotEmpty.bind(this);
      this.hasAllAttributes = this.hasAllAttributes.bind(this);
      this.submitButton = this.submitButton.bind(this);
    }

    componentDidMount(){
      let coffeeShowId = this.props.match.params.id // this.props.coffeeShowId 
      this.props.fetchCoffeeTime(coffeeShowId);
      this.props.fetchHosts();
      this.props.fetchStarSystems();
    }

    saveCoffeeTime(){
      // sets state to incoming coffee_time attributes
      const savedCT = ()=> {
        this.state = this.props.coffeeShow;
      }
      
      return savedCT();
    }
    
    checkNotEmpty(object){
      return(
        // !(Object.entries(object).length === 0 &&
        //   object.constructor === Object)
       !jQuery.isEmptyObject(object)
      ) 
    }

    getHosts(){
      const savedHosts = () =>{
        //check if state is empty
        if (this.state && this.props.hosts){
          if ( this.checkNotEmpty(this.state)
            && !this.checkNotEmpty(this.props.hosts)
          ){
            this.props.fetchHosts(this.state.host_id)
        }}
      }

      return savedHosts();
    }

    setHost(){
      // locates our host from the array of hosts using the host id and saves
      // to this.host key
      const ourHost = () =>{
        this.host = this.props.hosts[this.state.host_id]
      }

      return ourHost();
    }

    setStar(){
      //locates our star from the array of stars using the star_system_id and
      //saves to this.star key

      const ourStar = () =>{
        for ( let starElement of this.props.stars){
          if (starElement.id === this.state.star_system_id ){
            this.star = starElement.name
          }
        }
      }

      return ourStar();
    }
    // creates a function to submit user to CoffeeTime
    coffeeSubmit(){
      return(e) =>{
        e.preventDefault();
        this.props.coffeeSignUp(this.props.currentUser.id, this.state.id);
      }
    }

    //PAGE RENDERING FUNCTIONS 

    hasAllAttributes(){
      return (
        this.checkNotEmpty(this.state)
        && this.checkNotEmpty(this.host)
        && this.checkNotEmpty(this.star)
      )
    }

    meetingDay(){
      const ourDate =()=>{
        let fullDate = `${this.state.day}, ${this.state.meet_date}`
        return fullDate;
      }

      return ourDate();
    }

    time(){
      const timePrint=() =>{
      let timeStart = this.state.start_time
      let timeEnd = (this.state.start_time + 2)
      let timespan = `${timeStart}-${timeEnd}`

      return timespan;
      }

      return timePrint();
    }

    showSeats(){
      const seats = () =>{
        let seatDisplay;
        let meter = <span className="meter">" "</span>
        let notch = <span className="notch">" "</span>

        const progressBar = [];

        let seatCount = this.state.available_seats;
        let extraSeats = 6 - this.state.available_seats;


        while (seatCount > 0) {
          progressBar.push(notch)
          seatCount--;
        }

        while (extraSeats) {
          progressBar.push(meter)
          extraSeats--;
        }

        
        seatDisplay= <div className="seatDisplay">
          <p className="seats">{this.state.available_seats} seats left!</p>
          <div className="seat-meter">
            <ul>
              {progressBar}
            </ul>
          </div>
        </div>
       
       return seatDisplay;
      }

      return seats();
    }

    submitButton(){

      if (this.props.currentUser) {
        //this.props.coffeeSignUp(this.state.id, this.props.currentUser.id)
        console.log("hi, I'm signing you up to have coffee!")

        return (
          
          // <Link to="/coffee_schedule"
          // onClick={this.coffeeSubmit}
          // >Sign Me Up</Link>

          //TEMP
          <input className='CoffeeSignUp'
            type="button" value="Sign Me Up"
            onClick={this.coffeeSubmit()} />
          
       )
      }

      else {
        return (
          <Link to="/signup">Sign Me Up</Link>
        )
      }

    }


    componentDidUpdate(){
      //setting all render checks here
    }




  render(){

    let sidebar = <p></p>;
    let ifUser = <p></p>;
    let hostProfile = <p></p>;
    let facebook=<p></p>;

    this.saveCoffeeTime();
    this.getHosts();

    // setsHost for page

    // if (this.props.hosts && this.props.hosts.length && this.state.host_id){
    //   this.setHost();
    // }

    if (this.checkNotEmpty(this.props.hosts) && this.state && this.state.host_id){
      this.setHost();
    }

    // setStar for page
    if (this.checkNotEmpty(this.props.stars) && this.state && this.state.star_system_id){
      this.setStar();
    }

    //After getting CoffeeShow data and Host data do the following:

    if (this.hasAllAttributes()){
          // console.log('HAVE ALL ATTRIBUTES!')

      if(this.checkNotEmpty(this.props.currentUser)){
        ifUser=<div className='User'>
          <h2>NAME</h2>
          <input type="text" readOnly placeholder={this.props.currentUser.nickname}/> 

          <h2>EMAIL</h2>
          <input type="text" readOnly placeholder={this.props.currentUser.email}/> 

          <h2>MOBILE NUMBER</h2>
          <p>Optional, but helps {this.host.name} contact you
          on your meeting day</p>
          <input type="text" readOnly placeholder={this.props.currentUser.phone_number}/> 

        </div>
      }

      sidebar = <div className="sidebar">

        <div className='coffee-card'>

          <h1>Join {this.host.name} for Coffee Time</h1>
          <h3 className='show-date'>{this.meetingDay()}</h3>
          <h3 className='show-time'>{this.time()}</h3>
          <p className='show-place'>{this.state.place}</p>
          <p className='show-star'>{this.star}</p>
          <p className="coffee-show-link" >{document.location.href}</p>
          {this.showSeats()}

        </div>

        {ifUser}


        {this.submitButton()}
        
        <Link to='/coffee_schedule' >See Other Coffee Times</Link>

        <div className="show-exactly">
          Coffee With Aliens is coffee, with aliens
          For .083 of an Earth cycle, five aliens and their host(no not that kind) sit to converse.
          Perhaps a tad strange, but we're fostering galactic goodwill. 
          Sit and chat with the unknown.  To get started learn a bit about your host.
          👉
        </div>

      </div>

      if(this.host.facebook){
        facebook = <a href={this.host.facebook}>FACEBOOK</a>
      }

      hostProfile = <div className="host-profile">

        <h1 className="show-host-header">Meet your Host, {this.host.name}</h1>

        <img className="show-host-image" src="" alt=""/>

        {facebook}

        <div className="show-host-synopsis">
          <p>{this.host.intro}</p>
          <h3>What's your story?</h3>
          <p>{this.host.story}</p>
          <h3>What might we talk about?</h3>
          <p>{this.host.topics}</p>
          <p>Witty line here!</p>
  
        </div>

      </div>


    }


    return(
      <div className="coffee-show">
        {sidebar}
        {hostProfile}
      </div>
    )
    
  }
}

export default CoffeeShow;