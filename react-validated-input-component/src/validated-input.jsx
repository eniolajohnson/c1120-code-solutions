import React from 'react';

class ValidatedInput extends React.Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  renderContent() {
    const { value } = this.state;
    if (value.length === 0) {
      return (
        <form>
          <div>
            <label htmlFor="pwd">Password</label>
          </div>
          <input type="password" name="password" id="pwd" value={this.state.value} onChange={this.handleChange} />
        </form>
      )
    }

    if (value.length < 8) {
      return (
        <form>
          <div>
            <label htmlFor="pwd">Password</label>
          </div>
          <input type="password" name="password" id="pwd" value={this.state.value} onChange={this.handleChange} />
          <span className='times'>
            <i class="fas fa-times"></i>
          </span>
          <p>Your password is too short.</p>
        </form>
      )
    }

    if (value.length >= 8) {
      return (
        <form>
          <div>
            <label htmlFor="pwd">Password</label>
          </div>
          <input type="password" name="password" id="pwd" value={this.state.value} onChange={this.handleChange} />
          <span className='tick'>
            <i class="fas fa-check"></i>
          </span>
        </form>
      )
    }
  }

  render(){
    return this.renderContent();
  }
}

export default ValidatedInput;
