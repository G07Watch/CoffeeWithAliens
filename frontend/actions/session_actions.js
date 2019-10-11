import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAN_ERRORS = 'CLEAN_ERRORS'

export const signup = user => dispatch =>(
  SessionApiUtil.signup(user)
  .then(user => {
  dispatch(receiveCurrentUser(user))
  },
  errors => {dispatch(receiveErrors(errors))
  }
  )
);


export const receiveCurrentUser = user =>({
  type: RECEIVE_CURRENT_USER,
  user: user
});


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})


export const login = user => dispatch => (
  SessionApiUtil.login(user)
  .then((user) => {
    dispatch(receiveCurrentUser(user))
    },
    (errors) => {
    dispatch(receiveErrors(errors))
    }
    )
);

export const logout = () => dispatch =>(
  SessionApiUtil.logout()
  .then(nullUser=> {
    dispatch(logoutCurrentUser(nullUser))
    },
    errors => {
    dispatch(receiveErrors(errors))
    }
    )
);

export const logoutCurrentUser = nullUser => ({
  type: LOGOUT_CURRENT_USER,
  nullUser
})

export const clearErrors = () => dispatch => (
  ()=>dispatch(cleanErrors())
)

export const cleanErrors = ()=>{
  let errors = null
  return({
    type: CLEAN_ERRORS,
    errors
  })
}