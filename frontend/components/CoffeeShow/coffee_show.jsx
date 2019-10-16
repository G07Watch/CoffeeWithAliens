import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeShow extends React.Component{

    constructor(props){
      super(props);

      this.state = {};
      this.host = {};
      this.star ={};

      this.checkNotEmpty = this.checkNotEmpty.bind(this);
      this.hasAllAttributes = this.hasAllAttributes.bind(this);
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
            console.log(starElement.name)
          }
        }
      }

      return ourStar();
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



  render(){

    let sidebar = <p></p>;
    let ifUser = <p></p>;
    let hostProfile = <p></p>;

    this.saveCoffeeTime();
    this.getHosts();

    // setsHost for page
    if(this.checkNotEmpty(this.props.hosts)){
      this.setHost();
    }
    // setStar for page
    if(this.checkNotEmpty(this.props.stars)){
      this.setStar();
      console.log(this.star);
    }

    //After getting CoffeeShow data and Host data do the following:

    if (this.hasAllAttributes()){
          // console.log('HAVE ALL ATTRIBUTES!')

      sidebar = <div>

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

      </div>



    }


    return(
      <div>
        COFFEE SHOW RENDERED
        {sidebar}
        {hostProfile}
      </div>
    )
    
  }
}

export default CoffeeShow;