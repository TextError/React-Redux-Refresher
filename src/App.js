import React, { Component } from 'react';

// Components
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';

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
          <ParentComponent />
          <ChildComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
