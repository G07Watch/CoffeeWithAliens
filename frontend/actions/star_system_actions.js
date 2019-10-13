import * as StarApiUtil from '../util/star_system_api_util';

export const RECEIVE_ALL_STARSYSTEMS = 'RECEIVE_ALL_STARSYSTEMS';
export const RECEIVE_STARSYSTEM = 'RECEIVE_STARSYSTEM';
export const RECEIVE_STAR_ERRORS = 'RECEIVE_STAR_ERRORS';

export const fetchStarSystems = () => dispatch =>(
  StarApiUtil.fetchStarSystems()
  .then(
    starSystems => dispatch(receiveAllstarSystems(starSystems)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const receiveAllstarSystems = starSystems =>({
  type: RECEIVE_ALL_STARSYSTEMS,
  starSystems
});

export const receiveErrors = errors =>({
  type: RECEIVE_STAR_ERRORS,
  errors
}) 

export const fetchStarSystem = id => dispatch =>(
  StarApiUtil.fetchStarSystem(id)
  .then( 
    starSystem => dispatch(receiveStarSystem(starSystem)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const receiveStarSystem = starSystem =>({
  type: RECEIVE_STARSYSTEM,
  starSystem
})
