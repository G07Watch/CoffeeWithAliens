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
