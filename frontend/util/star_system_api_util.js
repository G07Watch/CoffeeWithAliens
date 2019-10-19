export const fetchStarSystems = () => (
  $.ajax({
    method: 'GET',
    url: 'api/star_systems'
  })
);

export const fetchStarSystem = id => (
  $.ajax({
    method: 'GET',
    url: `api/star_systems/${id}`
  })
);

window.fetchStarSystems = fetchStarSystems;