json.star_systems @star_systems.each do |star_system|
  json.set! star_system.id do
     json.partial! 'api/star_systems/star_system' star_system: star_system
  end
end