import React from 'react';

const accordionInfo = [
  {
    title: 'Hypertext Markup Language',
    description: 'Hypertext Markup Language(HTML) is the standard markup language for creating web pages and web applications.With Cascading Style Sheets(CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    title: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets(CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    title: 'JavaScript',
    description: 'JavaScript, often abbreviated as JS, is a high - level, interpreted programming language that conforms to the ECMAScript specification JavaScript has curly bracket syntax, dynamic typing, prototype - based obiect - orientation, and first - class functions'
  }
];

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
      html: false,
      css: false,
      js: false
    };

    this.handleClickhtml = this.handleClickhtml.bind(this);
    this.handleClickcss = this.handleClickcss.bind(this);
    this.handleClickjs = this.handleClickjs.bind(this);
  }

  handleClickhtml() {
    this.setState({
      html: !this.state.html,
      css: false,
      js: false
    });
  }

  handleClickcss() {
    this.setState({
      html: false,
      css: !this.state.css,
      js: false
    });
  }

  handleClickjs() {
    this.setState({
      html: false,
      css: false,
      js: !this.state.js
    });
  }

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
