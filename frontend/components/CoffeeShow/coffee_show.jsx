import React from 'react'


class CoffeeShow extends React.Component{

    constructor(props){
      super(props);

      this.state;
    }

    componentDidMount(){
      let coffeeShowId = this.props.match.params.id // this.props.coffeeShowId 
      this.props.fetchCoffeeTime(coffeeShowId);
    }

  render(){
    this.state = this.props.coffeeShow;

    let date;
    if (this.state && this.state.meet_date){
      date = this.state.meet_date
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