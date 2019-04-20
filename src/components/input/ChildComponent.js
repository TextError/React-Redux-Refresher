import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    return (
      <div className='input-child mt-3'>
        <div className='row'>
          <div className='col text-center d-flex'>
            <div className='input-child-title m-auto'>
              <h5>Child -- Component</h5>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex'>
            <div className='m-auto'>
              <input />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChildComponent;