import React, { Component } from 'react'

class ParentComponent extends Component {
  render() {
    return (
      <div className='input-parent'>
        <div className='row'>
          <div className='col mt-5 d-flex'>
            <div className='input-parent-title m-auto'>
              <h5>Parent -- Component</h5>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 d-flex'>
            <div className='m-auto'>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParentComponent;