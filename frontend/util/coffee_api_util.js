export const fetchCoffeeTimes = ()=>(
  $.ajax({
    method: 'GET',
    url: 'api/coffee_times'
  })
)