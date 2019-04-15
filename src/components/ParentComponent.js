import React, { Component } from 'react';

class ParentComponent extends Component {
  render() {
    return (
      <div className='parent'>
        <div className='row'>
          <div className='col text-center mt-5 d-flex'>
            <div className='parent-title m-auto'>
              <h5>Parent -- Component</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default  ParentComponent;