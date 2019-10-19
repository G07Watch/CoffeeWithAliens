json.array! @star_systems do |star_system|
  json.partial! 'api/star_systems/star_system', star_system: star_system
end