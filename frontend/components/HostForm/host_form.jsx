import React from 'react'


class HostForm extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      user_id: this.props.currentUserId,
      facebook: 'Your facebook account login',
      intro: 'Tell us who you are!',
      story: 'Tell us what made you decide to have coffee and be a host!',
      topics: 'What are some of the topics you enjoy talking about?'
    }

    this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault();
    this.props.processHost(this.state);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render(){

    let errors;

    //ERROR RENDER LOGIC

    if (this.props.errors){
      errors = <ul>
        <h2>Error:</h2>
       this.props.errors.map(
        error =>(
        <p key={error} className="sess-errors">{error}</p>)
        )
      </ul>
      // errors = <p className="sess-errors">Error: {this.props.errors}</p>
      // window.alert(this.props.errors);
    }
    else{ errors = <p></p> }

    

    return(
      <div className="host-form-clipboard">
        {errors}

        <header>Want to become a Coffee Host?</header>

        <p>
          Interested in arranging gatherings to make new friends, make
          people feel welcome and spread interesting conversation?  
          Just fill out the fields below and submit to become a Coffee Host!
        </p>

        <form className="host-form" onSubmit={this.submit}>

          <input type="text" value={this.state.facebook} onChange={this.update('facebook')}/>
          <textarea value={this.state.intro} onChange={this.update('intro')}></textarea>
          <textarea value={this.state.story} onChange={this.update('story')}></textarea>
          <textarea value={this.state.topics} onChange={this.update('topics')}></textarea>

          <input type="submit" value="MAKE ME A HOST!"/>
        </form>
      </div>
    )
  }
}

export default HostForm;