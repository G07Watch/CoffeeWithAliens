json.star_systems @star_systems.map do |star_system|
  json.partial! 'api/star_systems/star_system' star_system: star_system
end