import React from 'react';

class Stopwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    this.tick = this.tick.bind(this);
    this.add = this.add.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.timeActions = this.timeActions.bind(this);
    var intervalId = '';
  }

  add(){
    this.setState({ count: this.state.count + 1 });
  }

  tick() {
    this.intervalId = setInterval(this.add, 1000);
    this.setState({ reset: true });
  }

  pause() {
    clearInterval(this.intervalId);
    this.setState({ count: this.state.count });
    console.log('PAUSE clicked');
  }

  reset() {
      this.setState({ count: 0 });
  }

  timeActions() {
    const { count } = this.state;
    if (count === 0) {
      return (
        <div className='circle'>
          <div className='count'>{count}</div>
          <button onClick={this.tick}>play</button>
        </div>
      )
    }
    if (count > 0) {
      return (
        <div className='circle'>
          <div className='count' >{count}</div>
          <button onClick={this.pause}>pause</button>
        </div>
      )
    }

    // if (count > 0) {
    //   return (
    //     <div className='circle'>
    //       <div className='count' onClick={this.pause}>{count}</div>
    //       <button>pause</button>
    //     </div>
    //   )
    // }
  }

  render(){
    return (
      this.timeActions()
    )
  }
}

export default Stopwatch;
