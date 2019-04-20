import React, { Component } from 'react';

// Components
import Root from './components/Root';

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
          <Root />
        </div>
      </Provider>
    );
  }
}

export default App;
