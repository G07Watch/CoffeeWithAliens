json.array! @user_coffee_times do |coffee_time|
  
 json.partial! 'api/coffee_times/coffee_time', coffee_time: coffee_time

end