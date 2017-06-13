import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import LoginPage from './containers/Login';

interface Props {
  userName: string;
}

class App extends Component<Props, {}> {
  componentWillMount() {
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  }
}

export default App;
