json.hosts @hosts.map do |host|
  
  json.set! :host do

    json.id host.id
    json.user_id host.user_id
    json.name host.user.first_name
    json.facebook host.facebook
    json.intro host.intro
    json.story host.story
    json.topics host.topics

  end

end