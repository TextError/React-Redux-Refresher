import React, { Component } from 'react';

// Components
import Increment from './increment/Increment';


class Root extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col'>
              <Increment />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Root;