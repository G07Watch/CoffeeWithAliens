import * as CoffeeApiUtil from '../util/coffee_api_util';

export const RECEIVE_COFFEE_TIMES = 'RECEIVE_COFFEE_TIMES';
export const RECEIVE_COFFEE_ERRORS = 'RECEIVE_COFFEE_ERRORS';

export const fetchCoffeeTimes = () => dispatch =>(
  CoffeeApiUtil.fetchCoffeeTimes()
  .then(
    coffeeTimes => dispatch(receiveCoffeeTimes(coffeeTimes)),
    errors => dispatch(receiveCoffeeErrors(errors))
  )
);

export const receiveCoffeeTimes = (coffeeTimes) =>{
  return({
    type: RECEIVE_COFFEE_TIMES,
    coffeeTimes
  })
};

export const receiveCoffeeErrors = (errors) =>{
  return({
    type: RECEIVE_COFFEE_ERRORS,
    errors 
  })
}
