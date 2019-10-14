import React from 'react'
import {Link} from 'react-router-dom'
import { Z_FILTERED } from 'zlib';


 

 for (meeting of coffeeMeets){
   if(meeeting.month === currentMonth){
     currentMonthArr.push(meeting);
   }

   else nextMonthArr.push(meeting);
 };


 currentMonthArr filter...

 // Current Month Display Div


 currentMonthSchedule = 
 <div className={currentMonth}>
  <p>{currentMonth}Coffee Times</p>   

   <div className="jump">
     Jump links
    </div>

   <div className="star">
      <ul>
      {starCoffeeSchedule}
      </ul>
    </div>

 </div>



while( count < 0){

  
  let schedule;
  let monthArr;
  
  if (monthFlag === true){
    
    schedule = currentMonthSchedule
    monthArr = currentMonthArr
  }
  
  else {
    schedule = currentMonthSchedule
    monthArr = currentMonthArr
    
  }

  monthFlag = false;
  count--;
}
