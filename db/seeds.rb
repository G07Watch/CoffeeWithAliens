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

user_four = User.new(
  nickname: 'John',
  email: 'John12@gmail.com',
  password: '12345678',
  star_system_id: star_one.id)

user_four.save!

user_five = User.new(
  nickname: 'Sheryl',
  email: 'lalaland@gmail.com',
  password: '12345678',
  star_system_id: star_one.id)

user_five.save!

user_six = User.new(
  nickname: 'Mithos',
  email: 'mhl@gmail.com',
  password: '12345678',
  star_system_id: star_one.id)

user_six.save!

host_one = Host.create(
  facebook: 'https://www.facebook.com/',
  intro: "Hi I'm Garvin",
  story: "Born in Trinidad, raised in NYC.",
  topics: "Space travel, military strategy, philosophy",
  user_id: user_one.id
)

user_one.update(is_host: true)

host_two =  Host.create(
  facebook: '',
  intro: 'E.T. the Extra-Terrestrial is a 1982 American science fiction film produced and 
  directed by Steven Spielberg, and written by Melissa Mathison. It features special effects by
   Carlo Rambaldi and Dennis Muren, and stars Henry Thomas, Dee Wallace, Peter Coyote, Robert MacNaughton,
    Drew Barrymore, and Pat Welsh. It tells the story of Elliott (Thomas), a boy who befriends an 
    extraterrestrial, dubbed "E.T.", who is stranded on Earth. ',
  story: 'The alien learns to speak English by repeating what Gertie says as she watches Sesame Street and, 
  at Elliotts urging, dubs itself E.T. E.T. reads a comic strip where Buck Rogers, stranded, calls for
   help by building a makeshift communication device and is inspired to try it himself. E.T. receives Elliotts
   help in building a device to "phone home" by using a Speak & Spell toy. Michael notices that E.T.s health is
   declining and that Elliott is referring to himself as "we".',
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
  available_seats: 2,
  host_id: host_one.id,
  star_system_id: 1
)

coffee_three = CoffeeTime.create(
  place: 'Brodo Asogi',
  date: Time.now,    
  start_time: 8,
  available_seats: 1,
  host_id: host_two.id,
  star_system_id: 3
)

coffee_four = CoffeeTime.create(
  place: 'Earth',
  date: DateTime.new(2019,10,5.5),
  start_time: 11.5,
  available_seats: 5,
  host_id: host_one.id,
  star_system_id: 1
)

coffee_five = CoffeeTime.create(
  place: 'Brodo Asogi',
  date: DateTime.new(2019,11,5.5),    
  start_time: 3,
  available_seats: 4,
  host_id: host_two.id,
  star_system_id: 3
)


coffee_six = CoffeeTime.create(
  place: 'Brodo Asogi',
  date: DateTime.new(2019,10,7.5),    
  start_time: 3,
  available_seats: 3,
  host_id: host_two.id,
  star_system_id: 3
)

coffee_seven = CoffeeTime.create(
  place: 'Europa',
  date: DateTime.new(2019,11,1.5),
  start_time: 8.5,
  available_seats: 6,
  host_id: host_one.id,
  star_system_id: 1
)

coffee_eight = CoffeeTime.create(
  place: 'Centaurus Un',
  date: DateTime.new(2019,11,1.5),
  start_time: 13,
  available_seats: 1,
  host_id: host_one.id,
  star_system_id: 2
)