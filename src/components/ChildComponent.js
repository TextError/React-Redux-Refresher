import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { setIncrement } from '../Redux/actions/increment';

class ChildComponent extends Component {
  render() {
    return (
      <div className='child mt-5'>
        <div className='row'>
          <div className='col text-center d-flex'>
            <div className='child-title m-auto'>
              <h5>Child -- Component</h5>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex'>
            <div className='m-auto'>
              <button 
                className='btn btn-success mt-3'
                onClick={this.props.setIncrement}
              >
                Click me!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  
}

export default connect(mapStateToProps, { setIncrement })(ChildComponent);