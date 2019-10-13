# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


star_one = StarSystem.create( name: 'Sol')
star_two = StarSystem.create( name: 'Alpha Centauri')
star_three = StarSystem.create( name: 'Brodo')


user_one = User.new( 
  nickname: 'Garvin',
  email: 'garvin@gmail.com', 
  password: '12345678',
  star_system_id: star_one.id)

user_one.save!

user_two = User.new( 
  nickname: 'Mystery User',
  email: 'mystery@gmail.com', 
  password: '12345678',
  star_system_id: star_one.id)

user_two.save!

user_three = User.new(
  nickname: 'ET',
  email: 'ET@brodo.com',
  password: '12345678',
  star_system_id: star_three.id)

user_three.save!

host_one = Host.create(
  facebook: 'Nope',
  intro: "Hi I'm Garvin",
  story: "Born in Trinidad, raised in NYC.",
  topics: "Space travel, military strategy, philosophy",
  user_id: user_one.id
)

user_one.update(is_host: true)

host_two =  Host.create(
  facebook: 'What is "facebook"?',
  intro: 'ET is alien',
  story: 'Glad to be home.  Crashed.  Tired.  Coffee good.',
  topics: 'My trip far from home.  Also types of coffee.',
  user_id: user_three.id 
)

user_three.update(is_host: true)

coffee_one = CoffeeTime.create(
  place: 'Earth',
  date: DateTime.new(2019,11,1.5),
  start_time: 11.5,
  available_seats: 6,
  host_id: host_one.id,
  star_system_id: 1
)
coffee_two = CoffeeTime.create(
  place: 'Earth',
  date: Time.now,    
  start_time: 11,
  available_seats: 6,
  host_id: host_one.id,
  star_system_id: 1
)

coffee_three = CoffeeTime.create(
  place: 'Brodo Asogi',
  date: Time.now,    
  start_time: 8,
  available_seats: 6,
  host_id: host_two.id,
  star_system_id: 3
)
