import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { setIncrement } from '../Redux/actions/increment';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { increment } = prevState;

    if( increment !== prevState.increment  ) {
      return { increment };
    }
    else return null;
 }

  componentDidUpdate(prevProps, prevState) {
    const { increment } = this.state;
    if (prevState.increment !== increment) {
      this.props.setIncrement(increment)
    }
  }
  
  onClick = () => {
    const { increment } = this.state;
    this.setState({ increment: increment + 1 });
  }
  
  render() {
    console.log(this.state.increment)
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
                onClick={this.onClick}
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

const mapStateToProps = state => ({
  increment: state.increment
})

export default connect(mapStateToProps, { setIncrement })(ChildComponent);