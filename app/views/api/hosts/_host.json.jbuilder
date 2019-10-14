json.extract! host, :user_id, :facebook, :intro, :story, :topics

json.set! :host do

  json.id @host.id
  json.user_id @host.user_id
  json.name @user.first_name
  json.facebook @host.facebook
  json.intro @host.intro
  json.story @host.story
  json.topics @host.topics

end