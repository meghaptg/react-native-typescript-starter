import{
  LOGIN
} from './../actions/types';

const INITIAL_STATE = {
  loginData: false,
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN: {
      console.log('login data in reducer', action.payload);
      return {...state, loginData: action.payload}
    }
    default:
      return state;
  }
};
