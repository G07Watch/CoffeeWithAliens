json.starSystems @starSystems.each do |starSystem|
  json.set! starSystem.id do
     json.partial! 'api/star_systems/star_system' starSystem: starSystem
  end
end