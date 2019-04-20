import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { setInput } from '../../Redux/actions/input';

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { input } = this.state;
    this.props.setInput(input);
    
    // Reset input
    this.setState({ input: '' })
  }

  onChange = e => {
    this.setState({ input: e.target.value })
  };

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
              <form className="form-inline mt-3" onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                  <input 
                    className="form-control" 
                    type="text" 
                    placeholder="..." 
                    value={this.state.input}
                    onChange={this.onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-2">submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {setInput} )(ChildComponent);