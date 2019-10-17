export const fetchCoffeeTimes = ()=>(
  $.ajax({
    method: 'GET',
    url: 'api/coffee_times'
  })
)

export const fetchCoffeeTime = id =>(
  $.ajax({
    method: 'GET',
    url: `api/coffee_times/${id}`
  })
)

export const coffeeSignUp = (userId, coffeeTimeId) =>(
  $.ajax({
    method: 'PATCH',
    url:`api/users/${userId}/coffee_schedules/${coffeeTimeId}`
  })
)

export const userCoffeeEvents = (id) =>()

// window.coffeeSignUp = coffeeSignUp;