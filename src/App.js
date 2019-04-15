import React, { Component } from 'react';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Css
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

        </div>
      </Provider>
    );
  }
}

export default App;
