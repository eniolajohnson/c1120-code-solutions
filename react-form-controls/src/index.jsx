import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component{
  constructor(){
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({ value: event.target.value})
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault();
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input onChange={this.handleChange} type="email" name="email" value={this.state.value} />
      <button>Sign Up</button>
    </form>
  }
}

ReactDOM.render (
  <NewsletterForm />,
  document.getElementById('root')
)
