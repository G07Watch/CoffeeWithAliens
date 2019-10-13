import * as HostApitUtil from '../util/host_api_util';

// export const RECEIVE_HOSTS = 'RECEIVE_HOSTS';
export const RECEIVE_HOST = 'RECEIVE_HOST';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_HOST_ERROR = 'RECEIVE_HOST_ERROR';
export const REMOVE_HOST = 'REMOVE_HOST';


export const fetchHost = (id) => dispatch => (
  HostApitUtil.fetchHost(id)
  .then( 
    host =>( dispatch(receiveHost(host))),
    errors =>( dispatch(receiveErrors(errors)))
  )
);


export const fetchUser = id => dispatch => (
  HostApitUtil.fetchUser(id)
  .then(
    user=>(dispatch(receiveUser(user))),
    errors =>(dispatch(receiveErrors(errors)))
  )
)

export const receiveHost = host =>({
  type: RECEIVE_HOST,
  host 
});

export const receiveErrors = errors =>({
  type: RECEIVE_HOST_ERROR,
  errors
});

export const createHost = host => dispatch =>(
  HostApitUtil.createHost(host)
  .then(
    host =>(dispatch(receiveHost(host))),
    errors =>(dispatch(receiveErrors(errors)))
  )
);

export const updateHost = host => dispatch =>(
  HostApitUtil.updateHost(host)
  .then(
    host =>(dispatch(receiveHost(host))),
    errors =>(dispatch(receiveErrors(errors)))
  )
);

export const updateUser = user => dispatch =>(
  HostApitUtil.updateUser(user)
  .then(
    user =>(dispatch(receiveUser(user))),
    errors =>(dispatch(receiveErrors(errors)))
  )
);

export const receiveUser = user => {
  return({
    type: RECEIVE_USER,
    hostUser: user
  })
};

export const deleteHost = host => dispatch =>(
  HostApitUtil.deleteHost(host)
  .then(
    host =>(dispatch(removeHost(host))),
    errors =>(dispatch(receiveErrors(errors)))
  )
);

export const removeHost = host =>{
  
  return({
    type: REMOVE_HOST,
    host
  })
}
