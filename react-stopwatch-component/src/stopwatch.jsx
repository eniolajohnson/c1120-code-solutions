import React from 'react';

class Stopwatch extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      start: false
    }
    this.tick = this.tick.bind(this);
    this.add = this.add.bind(this);
    this.reset = this.reset.bind(this);
  }

  add(){
    this.setState({ count: this.state.count + 1 })
  }

  tick() {
    setInterval(this.add, 1000);
    this.setState({ start: !this.state.start })
    console.log(this.state.start)
  }

  reset() {
    this.setState({ count: 0 })
  }

  render(){
    return (
      <div className='circle'>
        <div className='count' onClick={this.tick}>Count = {this.state.count}</div>
      </div>
    )
  }
}


export default Stopwatch;
