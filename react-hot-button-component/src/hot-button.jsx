import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({count: this.state.count + 1 })
    console.log(this.state.count)
  }

  render(){
    if (this.state.count < 3){
      return <button className='button default' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count >= 3 && this.state.count < 6) {
      return <button className='button purple' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count >= 6 && this.state.count < 9){
      return <button className='button lilac' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count >= 9 && this.state.count < 12) {
      return <button className='button salmon' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count >= 12 && this.state.count < 15) {
      return <button className='button orange' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count >= 15 && this.state.count < 18) {
      return <button className='button yellow' onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.count > 17) {
      return <button className='button white' onClick={this.handleClick}>Hot Button</button>
    }
  }
}

export default HotButton;
