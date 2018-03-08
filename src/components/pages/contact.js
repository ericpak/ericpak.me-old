import React, { Component } from 'react';

// Nav and footer height
const navFooterHeight = 44;

class Contact extends Component {

  componentDidMount(){
    var paintCanvas = document.getElementsByClassName("PaintCanvas")[0].style;
    paintCanvas.top = (-window.innerHeight + navFooterHeight) + "px";
    paintCanvas.bottom = (window.innerHeight - navFooterHeight) + "px";
    console.log(paintCanvas);

    var header = document.getElementsByClassName("Header")[0].style;
    header.position = "absolute";
    header.height = "100vh";
  }

  render() {
    return (
      <div className="wrap contact">

        <h1>Contact</h1>

        <p>Feel free to contact me! My email address is <a href="mailto:pak.eric@gmail.com">pak.eric[a]gmail.com</a></p>
        <p>You can also contact me through <a href="https://www.linkedin.com/in/eric-pak/">Linkedin</a> or check out my <a href="https://github.com/ericpak">GitHub</a>!</p>
      </div>
    );
  }
}

export default Contact;
