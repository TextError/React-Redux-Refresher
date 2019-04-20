import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

class ParentComponent extends Component {
  render() {
    const { input } = this.props.input;
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
            <div className='m-auto text-center'>
              <p>{input}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  input: state.input
});

export default connect(mapStateToProps, {})(ParentComponent);