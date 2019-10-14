export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
)

export const fetchHosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/hosts'
  })
)

export const fetchHost = (user_id, id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/hosts/${id}`
  })
)

export const createHost = host => (
  $.ajax({
    method: 'POST',
    url: `api/users/${host.user_id}/hosts`,
    data: {host}
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
)

export const updateHost = host => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${host.user_id}/hosts/${host.id}`,
    data: {host}
  })
)

export const deleteHost = host => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${host.user_id}/hosts/${host.id}`
  })
)


window.fetchHosts = fetchHosts;