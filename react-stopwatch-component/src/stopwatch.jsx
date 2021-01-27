import React from 'react';

class Stopwatch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      pause: false
    }

    this.tick = this.tick.bind(this);
    this.add = this.add.bind(this);
    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.timeActions = this.timeActions.bind(this);
    this.intervalId;

  }

  add(){
    this.setState({ count: this.state.count + 1 });
  }

  tick() {
    this.intervalId = setInterval(this.add, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.setState({
      count: this.state.count,
      pause: true
     });
  }

  reset() {
    this.setState({ count: 0 });
  }

  timeActions() {
    const { count, pause } = this.state;
    if (count === 0) {
      return (
        <div className='circle'>
          <div className='count'>{count}</div>
          <div className='align'  onClick={this.tick}>
            <i class="fas fa-play"></i>
          </div>
        </div>
      )
    }

    if (count > 0 && pause === true) {
      return (
        <div className='circle'>
          <div onClick={this.reset} className='count'>{count}</div>
          <div className='align' onClick={this.tick}>
            <i class="fas fa-play"></i>
          </div>
        </div>
      )
    }

    if (count > 0) {
      return (
        <div className='circle'>
          <div onClick={this.reset} className='count'>{count}</div>
          <div className='align'  onClick={this.pause}>
            <i class="fas fa-pause"></i>
          </div>
        </div>
      )
    }

  }

  render(){
    return (
      this.timeActions()
    )
  }
}

export default Stopwatch;
