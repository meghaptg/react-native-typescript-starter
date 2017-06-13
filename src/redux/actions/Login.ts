import {LOGIN} from './types'
import Api from './../../Network/Api'

export const login = (params) => {
  return(dispatch) => {
    fetch(Api.login, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => {
          console.log('the response is : ', response);
          return response.json();
        })
        .then((responseData) => {
          console.log('the response data is : ', responseData);
          dispatch({
            type: LOGIN,
            payload: true
          })
        })
        .catch((error) => {
          console.log('Login error ',error);
        });
  }
}
