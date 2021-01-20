import React from 'react';

function Button(){

}

class ToggleSwitch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isChecked: !this.state.isChecked})
  }

  render(){
    if (this.state.isChecked === true){
      return (
        <div>
          <div onClick={this.handleClick} className='switch'>
            {/* <span type="checkbox" /> */}
            <span className='sliderChecked'></span>
          </div>
          <span className="on">ON</span>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={this.handleClick} className='switch'>
            {/* <span type="checkbox" /> */}
            <span className='slider'></span>
          </div>
          <span className="off">OFF</span>
        </div>
      )
    }
  }
}

export default ToggleSwitch;
