import React, { Component } from 'react';


class ChildComponent extends Component {
  render() {
    return (
      <div className='child'>
        <div className='row'>
          <div className='col text-center mt-5 d-flex'>
            <div className='child-title m-auto'>
              <h5>Child -- Component</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ChildComponent;