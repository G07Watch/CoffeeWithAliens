import React from 'react'


class CoffeeShow extends React.Component{

    constructor(props){
      super(props);

      this.state = this.props.coffeeShow;

    }

    componentDidMount(){
      let coffeeShowId = this.props.coffeeShowId 
      this.props.fetchCoffeeTime(coffeeShowId);
    }

  render(){


    return(
      <div>
        {this.state}
      </div>
    )
    
  }
}

export default CoffeeShow;