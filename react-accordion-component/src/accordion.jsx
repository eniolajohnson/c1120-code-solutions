import React from 'react';


class CustomStructure extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.handleClick = this.handleClick;
  }

  // handleClickhtml() {
  //   this.setState({
  //     html: !this.state.html,
  //     css: false,
  //     js: false
  //   });
  // }

  // handleClickcss() {
  //   this.setState({
  //     html: false,
  //     css: !this.state.css,
  //     js: false
  //   });
  // }

  // handleClickjs() {
  //   this.setState({
  //     html: false,
  //     css: false,
  //     js: !this.state.js
  //   });
  // }

  render() {
    if (this.state.html === false && this.state.css === false && this.state.js === false) {
      return (
        <div>
          <div className='headers' onClick={this.handleClickhtml}>
            <CustomStructure text={accordionInfo[0].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[0].description} />
          </div>

          <div className='headers' onClick={this.handleClickcss}>
            <CustomStructure text={accordionInfo[1].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[1].description} />
          </div>

          <div className='headers' onClick={this.handleClickjs}>
            <CustomStructure text={accordionInfo[2].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[2].description} />
          </div>
        </div>
      );
    }

    if (this.state.html === true && this.state.css === false && this.state.js === false) {
      return (
        <div>
          <div className='headers' onClick={this.handleClickhtml}>
            <CustomStructure text={accordionInfo[0].title} />
          </div>
          <div className='paragraphs'>
            <CustomStructure text={accordionInfo[0].description} />
          </div>

          <div className='headers' onClick={this.handleClickcss}>
            <CustomStructure text={accordionInfo[1].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[1].description} />
          </div>

          <div className='headers' onClick={this.handleClickjs}>
            <CustomStructure text={accordionInfo[2].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[2].description} />
          </div>
        </div>
      );
    }

    if (this.state.css === true && this.state.html === false && this.state.js === false) {
      return (
        <div>
          <div className='headers' onClick={this.handleClickhtml}>
            <CustomStructure text={accordionInfo[0].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[0].description} />
          </div>

          <div className='headers' onClick={this.handleClickcss}>
            <CustomStructure text={accordionInfo[1].title} />
          </div>
          <div className='paragraphs'>
            <CustomStructure text={accordionInfo[1].description} />
          </div>

          <div className='headers' onClick={this.handleClickjs}>
            <CustomStructure text={accordionInfo[2].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[2].description} />
          </div>
        </div>
      );
    }

    if (this.state.js === true && this.state.html === false && this.state.css === false) {
      return (
        <div>
          <div className='headers' onClick={this.handleClickhtml}>
            <CustomStructure text={accordionInfo[0].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[0].description} />
          </div>

          <div className='headers' onClick={this.handleClickcss}>
            <CustomStructure text={accordionInfo[1].title} />
          </div>
          <div className='hide paragraphs'>
            <CustomStructure text={accordionInfo[1].description} />
          </div>

          <div className='headers' onClick={this.handleClickjs}>
            <CustomStructure text={accordionInfo[2].title} />
          </div>
          <div className='paragraphs'>
            <CustomStructure text={accordionInfo[2].description} />
          </div>
        </div>
      );
    }
  }
}

export default Accordion;
