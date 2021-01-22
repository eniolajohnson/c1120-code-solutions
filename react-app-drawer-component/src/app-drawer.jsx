import React from 'react';

class AppDrawer extends React.Component{
  constructor(){
    super();
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  handleClick() {
    this.setState({show: !this.state.show})
  }

  renderContent(){
    const { show } = this.state;
    if (show === false){
      return (
        <div className='grid-container'>
          <div className='top-Comp'>
            <div onClick={this.handleClick}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.k5qSmsFoskV_0FD_gRM_NQHaHa%26pid%3DApi&f=1" alt="hamburger-menu" />
            </div>
            <p className='hide'>Menu</p>
            <div className="dropdown-content hide">
              <a href="#">About</a>
              <a href="#">Get Started</a>
              <a href="#">Sign In</a>
            </div>
          </div>
          <div></div>
        </div>
      )
    }

    if (show === true) {
      return (
        <div className='grid-container'>
          <div className='top-Comp'>
            <div className='hide' onClick={this.handleClick}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.k5qSmsFoskV_0FD_gRM_NQHaHa%26pid%3DApi&f=1" alt="hamburger-menu" />
            </div>
            <p>Menu</p>
            <div className="dropdown-content">
              <a href="#">About</a>
              <a href="#">Get Started</a>
              <a href="#">Sign In</a>
            </div>
          </div>
          <div className='grey' onClick={this.handleClick}></div>
        </div>
      )
    }
  }

  render() {
    return this.renderContent()
  }
}

export default AppDrawer;
