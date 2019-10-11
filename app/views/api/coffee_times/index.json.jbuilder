json.coffee_times @coffee_times.each do |coffee_time|
  coffee_time.id do
    json.partial! 'api/coffee_times/coffee_time', coffee_time: coffee_time