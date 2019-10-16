import React from 'react'


class CoffeeShow extends React.Component{

    constructor(props){
      super(props);

      this.state={};
      this.checkNotEmpty = this.checkNotEmpty.bind(this);
    }

    componentDidMount(){
      let coffeeShowId = this.props.match.params.id // this.props.coffeeShowId 
      this.props.fetchCoffeeTime(coffeeShowId);
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
        !(Object.entries(object).length === 0 &&
          object.constructor === Object)
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

  render(){

    this.saveCoffeeTime();
    this.getHosts();
    
    if(this.checkNotEmpty(this.props.hosts)){
      this.setHost();
      console.log(this.host);
    }


  

    // checks to see if there are hosts in the props and gets the host if not
    // if (this.state.host_id && 
    //   (Object.entries(this.props.hosts).length === 0)) {
    //   this.props.fetchHost(this.state.host_id);
    // }

    //checks to see if there are hosts in the props and if there 

    // if (this.state.host_id && (!(Object.entries(this.props.hosts).length === 0 &&
    //   this.props.hosts.constructor === Object))){
    //   this.host = this.hosts[this.state.host_id]
    // }
    

    let date;
    if (this.state && this.state.meet_date){

      date = 'HERE'
    }
    let time; 
    if (this.state){
      time = this.state.start_time
    }
    let place;
    if (this.state){
      place = this.state.place
    }

    return(
      <div>
        HERE
        {date}
        {time}
        {place}
      </div>
    )
    
  }
}

export default CoffeeShow;