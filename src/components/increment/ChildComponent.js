import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { setIncrement, setReset } from '../../Redux/actions/increment';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { increment } = nextProps;
    
    if( increment !== prevState.increment ) {
      return { increment };
    }
    else return null;
 }
  
  onClick = () => {
    this.props.setIncrement()
  }

  onReset = () => {
    this.props.setReset();
  }
  
  render() {
    return (
      <div className='increment-child mt-3'>
        <div className='row'>
          <div className='col text-center d-flex'>
            <div className='increment-child-title m-auto'>
              <h5>Child -- Component</h5>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex'>
            <div className='m-auto'>
              <button 
                className='btn btn-success mt-3'
                onClick={this.onClick}
              >
                Click me!
              </button>
              <button
                className='btn btn-danger mt-3 ml-3'
                onClick={this.onReset}
              >
                Reset
              </button>
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

export default connect(mapStateToProps, { setIncrement, setReset })(ChildComponent);