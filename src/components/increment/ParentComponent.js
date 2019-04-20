import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

class ParentComponent extends Component {
  render() {
    const { increment } = this.props.increment;
    return (
      <div className='parent'>
        <div className='row'>
          <div className='col mt-5 d-flex'>
            <div className='parent-title m-auto'>
              <h5>Parent -- Component</h5>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col mt-3 d-flex'>
            <div className='m-auto'>
              {increment}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  increment: state.increment
})

export default connect( mapStateToProps, {} )(ParentComponent);