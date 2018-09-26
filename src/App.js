import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Recommendations from './recommendations';
import MyList from './myList';
import MyListBottom from './mylistbottom';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <div className="container">
            <MyList />
            <Recommendations />
            <MyListBottom />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
