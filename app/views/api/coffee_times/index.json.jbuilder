json.coffee_times @coffee_times.map do |coffee_time|
  
    json.id coffee_time.id 
    json.month coffee_time.month
    json.star_system_id coffee_time.star_system_id
    json.host_id coffee_time.host_id
    json.place coffee_time.place
    json.meet_date cofee_time.meet_date
    json.day cofee_time.day
    json.start_time coffee_time.start_time
    json.available_seats

end