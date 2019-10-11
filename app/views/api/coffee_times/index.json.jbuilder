json.coffee_times @coffee_times.each do |coffee_time|
  coffee_time.id do
    json.id coffee_time.id 
    json.month coffee_time.month
    json.star_system_id coffee_time.star_system_id
    json.host_id coffee_time.host_id
    json.place coffee_time.place
    json.date cofee_time.date
    json.start_time coffee_time.start_time
    json.available_seats
  end

end