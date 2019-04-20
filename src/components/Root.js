import React, { Component } from 'react';

// Components
import Increment from './increment/Increment';
import Input from './input/Input';


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
          <div className='row no-gutters'>
            <div className='col'>
              <Input />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Root;