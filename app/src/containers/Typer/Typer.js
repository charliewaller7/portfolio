import React, { Component } from 'react';
import Aux from '../../hoc/Aux'


class Typer extends Component {

  static defaultProps = {
    dataText: [],
  }

  constructor(props) {
    super(props);

    const { dataText } = this.props;
    this.dataText = dataText

    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 75,
    }
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { isDeleting, loopNum, text, typingSpeed, } = this.state;
    const i = loopNum % this.dataText.length;
    const fullText = this.dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 75
    });

    if (!isDeleting && text === fullText) {

      if (loopNum >= this.dataText.length - 1) {
        return
      }
      
      setTimeout(() => this.setState({ isDeleting: true }), 250);
      
    } else if (isDeleting && text === '') {

      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }
    setTimeout(this.handleType, typingSpeed);
  };

  render() {    
    return (
      <span 
        className={this.props.className ? this.props.className : ""}> 
        {this.state.text} &nbsp; 
        </span>
    );
  }
}

export default Typer
