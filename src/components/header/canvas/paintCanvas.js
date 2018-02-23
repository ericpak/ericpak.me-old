import React, {Component} from "react";
import classNames from "classnames";

var brushRadius = 20;
var mouse_down = false;

var divStyle = {
  top: 0,
  bottom: 0,
}

class PaintCanvas extends Component {
  getClassName() {
    return classNames("PaintCanvas");
  }

  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      paintCanvas: this.refs.paintCanvas,
      c: undefined,
      cursorEventRadius: 20,
    }
  }

  moveCanvasUp(){
    divStyle = {
      top: -window.innerHeight+40,
      bottom: window.innerHeight-40,
    }
  }

  moveCanvasDown(){
    divStyle = {
      top: 0,
      bottom: 0,
    }
  }

  // Mousemove event listener
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    // console.log(this.state.x + " " + this.state.y);
    if(mouse_down)
      this.drawCircle();
  }

  // If canvas mounts
  componentDidMount() {
    this.state.paintCanvas = this.refs.paintCanvas;
    this.state.paintCanvas.width = window.innerWidth;
    this.state.paintCanvas.height = window.innerHeight;
    this.state.c = this.state.paintCanvas.getContext("2d");

    //////////////////////////////////////////////////////////////////////
    // the radius around the cursor that will interact with the canvas
    //////////////////////////////////////////////////////////////////////
    //var cursorEventRadius = 100;

    window.addEventListener('resize', this.resizeWindow.bind(this));
    window.addEventListener('mousedown', this.click.bind(this));
    window.addEventListener('mouseup', this.unclick.bind(this));
    this.defaultText();
  }

  defaultText(){
    this.state.c.fillStyle = 'black';
    this.state.c.font = "40px verdana";
    this.state.c.fillText("Hi,", 100, 100);
    this.state.c.font = "70px verdana";
    this.state.c.fillText("Eric Pak", 165, 165);
    this.state.c.font = "20px verdana";
    this.state.c.fillText("my name is", 165, 100);

    this.state.c.moveTo(window.innerWidth-235, 50);
    this.state.c.quadraticCurveTo(window.innerWidth-235, 150, window.innerWidth-350, 200);
    this.state.c.stroke();
    this.state.c.fillText("This Page!", window.innerWidth-460, 208);

    this.state.c.moveTo(window.innerWidth-150, 50);
    this.state.c.quadraticCurveTo(window.innerWidth-200, 200, window.innerWidth-300, 250);
    this.state.c.stroke();
    this.state.c.fillText("Check out my projects!", window.innerWidth-540, 260);

    this.state.c.moveTo(window.innerWidth-60, 50);
    this.state.c.quadraticCurveTo(window.innerWidth-50, 120, window.innerWidth-120, 200);
    this.state.c.stroke();
    this.state.c.fillText("blah blah blah", window.innerWidth-200, 230);

    this.state.c.moveTo(window.innerWidth-90, window.innerHeight-10);
    this.state.c.quadraticCurveTo(window.innerWidth-80, window.innerHeight-80, window.innerWidth-120, window.innerHeight-100);
    this.state.c.stroke();
    this.state.c.fillText("Contact me!", window.innerWidth-250, window.innerHeight-95);

    this.state.c.font = "italic 13px verdana";
    this.state.c.fillText("[Disclaimer: resizing the window resets the page]", 10, window.innerHeight-50);
  }

  reset(){
    this.state.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.defaultText();
  }

  click(e){
    mouse_down = true;
    this.drawCircle();
  }

  unclick(e){
    mouse_down = false;
  }

  drawCircle(){
    this.state.c.beginPath();
    this.state.c.arc(this.state.x, this.state.y, brushRadius, 0, Math.PI*2, false);
    this.state.c.fillStyle = this.props.style.color;
    this.state.c.fill();
  }

  resizeWindow(){
    this.state.paintCanvas.width = window.innerWidth;
    this.state.paintCanvas.height = window.innerHeight;
    this.defaultText();
  }
  //
  // animate(cursorEventRadius) {
  //   window.requestAnimationFrame(() => {
  //     this.animate(cursorEventRadius);
  //   });
  //   this.state.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //   this.state.c.beginPath();
  //   this.state.c.arc(this.state.x, this.state.y, this.state.cursorEventRadius, 0, Math.PI *2, false);
  //   this.state.c.strokeStyle = this.state.color;
  //   this.state.c.stroke();
  // }

  render() {
    return (
      <div style={divStyle} className={this.getClassName()} onMouseMove={this._onMouseMove.bind(this)}>
          <canvas ref="paintCanvas" id={this.getClassName() + "_canvas"} className={this.getClassName() + "_canvas"} />
      </div>
    )
  }
}

export default PaintCanvas;
