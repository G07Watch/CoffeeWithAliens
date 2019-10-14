const coffeeTimesErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COFFEE_ERRORS:
      return action.errors;

    case RECEIVE_COFFEE_TIMES:
      return {};

    default:
      return state;
  }
}


export default coffeeTimesErrorsReducer;