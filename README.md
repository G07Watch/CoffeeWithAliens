# COFFEE WITH ALIENS!


Table of Contents

1.   Overview
2.   Technologies 
3.   Features


## OVERVIEW

 Welcome to Coffee With Aliens.  This site is designed to foster friendship among all the denizens of the galaxy. In the hustle of modern galactic society, where everything and everyone is wired, it can be difficult to find the right time to really get to know new and interesting people.  That's where Coffee With Aliens comes in!
We're all aliens here, so let's take a moment to really appreciate our neighbors with all their quirks and 
peculiarities.

Coffee with Aliens allows guests to browse the upcoming Coffee Schedule.  You can get a few more details about the host, but the other attendees are a surprise. Click to sign up when you see a time and location that suits your schedule.

[Live Demo](https://coffee-with-aliens.herokuapp.com/#/)

## TECHNOLOGIES

1. REACT with REDUX
2. RUBY ON RAILS


## FEATURES

* Clean display for easy viewing
* User authentication - Members can quickly gain access when logged in from the same browser
* Guest Traversal 


* Code displaying current user on the Coffee Time page if signed in:


```javascript

let ifUser = <p></p>;

...

if (this.hasAllAttributes()){

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

```

* Coffee Time page while not signed in:

![alt text][logo]

[logo]: https://github.com/G07Watch/CoffeeWithAliens/blob/user_dash/app/assets/images/guest_view.png "Guest View"


* Coffee Time page while signed in: 


![alt text][User]

[User]: https://github.com/G07Watch/CoffeeWithAliens/blob/user_dash/app/assets/images/user_view.png  "Member View"
