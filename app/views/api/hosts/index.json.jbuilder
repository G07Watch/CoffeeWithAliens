json.hosts @hosts.map do |host|
  json.partial! 'api/hosts/host', host: host
end