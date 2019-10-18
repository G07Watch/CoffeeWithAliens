export const signup = user => $.ajax({method: "POST", url: "api/users/", data: {
    user
  }});

export const login = user => $.ajax({method: "POST", url: "api/session/", data: {
    user
  }});

export const logout = () => $.ajax({method: "DELETE", url: "api/session/"});


export const update = () =>(
  $.ajax({
    method: 'PATCH',
    url: 'stuuf'
  })
)


// window.signup = signup;
// window.login = login;
// window.logout = logout;