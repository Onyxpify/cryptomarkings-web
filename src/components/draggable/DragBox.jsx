import React from 'react';
import Draggable from 'react-draggable';

class DragBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {x:0,y:0},
      correct: 0,
    };
  }
  
    reset(a){
      this.setState({position: a});
    }

    handleStart= (e,data) => {
      let x1 = window.scrollX + document.querySelector('.SecurityCheck .icon1').getBoundingClientRect().left // x
      let x2 = window.scrollX + document.querySelector('.SecurityCheck .icon2').getBoundingClientRect().left // x

      this.setState({correct: Math.ceil(x2-x1)})
  
      
     
    }

  handleStop = (e, data) => {

    let coords= String(data.node.style.transform).replace('translate(','').replace(')','').replace('px','').replace('px','').trimEnd().split(', ');
    let high = this.state.correct + 15;
    let low = this.state.correct - 15;
  
    if(coords[0] >= low  && coords[0] < high) {
      this.reset({x:Number(coords[0]),y:0});
      this.props.resetMove(true);
    }else{
      this.props.resetMove(false);
      this.reset({x:0,y:0});

    }
  };
  

  

  // componentDidUpdate() {
  //   console.clear();
  //   console.log('drag box mounted')
  // }

  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x:0,y:0}}
        position={{x:this.state.position.x,y:this.state.position.y}}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        // bounds='parent'
        >
          
        <div  nodeRef={this.props.nodeRef} className="handle">
          {this.props.children || <div> Drag Me Around </div>}
        </div>
      </Draggable>
    );
  }
}

export default DragBox