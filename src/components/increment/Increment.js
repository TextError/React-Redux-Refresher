import React, { Component } from 'react';

// Components
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

class Increment extends Component {
  render() {
    return (
      <div className='increment'> 
        <div className='row no-gutters'>
          <div className='col'>
            <ParentComponent />
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col'>
            <ChildComponent />
          </div>
        </div>
      </div>
    )
  }
}

export default Increment;