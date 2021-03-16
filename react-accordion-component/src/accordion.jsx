import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    {
      this.props.info.map((info, i) => {
        if (info.title === e.target.innerText){
          this.setState({
            index: i
          })
        }
        if (this.state.index === i) {
          this.setState({
            index: null
          })
        }
    })}
  }

  render() {
    const info = this.props.info;
    const index = this.state.index;
    return (
      <div>
        {info.map((detail, i) =>
          <div>
            <h1 onClick={this.handleClick} className='headers'>{detail.title}</h1>
            <p className={i === index ? 'paragraphs' : 'hide'}>
              {detail.description}
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Accordion;
