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

