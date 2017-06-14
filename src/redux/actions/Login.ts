import {LOGIN} from './types'
import Api from './../../Network/Api'

export const login = (params) => {
  console.log('the params being passed are : ', params);
  console.log('the api being used is : ', Api.login);
/*  return ({
    type: LOGIN,
    payload: true
  });
*/
  return(dispatch) => {
    fetch(Api.login, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => {
          console.log('the response is : ', response);
          dispatch({
            type: LOGIN,
            payload: response
          })
        })
        .catch((error) => {
          console.log('Login error ',error);
        });
  }

};
