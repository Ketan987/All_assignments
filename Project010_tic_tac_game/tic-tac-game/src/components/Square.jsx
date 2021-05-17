import React from 'react';

class Square extends React.Component{
  render() {
      var color_s= null;
      if(this.props.value === 'X'){
          color_s = {
              backgroundColor:'red'};
      }else if(this.props.value === 'O') {
          color_s = {
              backgroundColor : 'blue'};
      }
      else{
        color_s = {
            backgroundColor : 'light-gray'}

     }
     if(this.props.winners){
         if(this.props.winners[0] === this.props.i || this.props.winners[1] === this.props.i || this.props.winners[2] === this.props.i){
            console.log("here are"+ this.props.winners, this.props.i);
            color_s = {
                backgroundColor : 'green'
            }
         }
     }
      
      return (
          <button className = "square" onClick = {this.props.onClick} style = {color_s}>
              {this.props.value}
          </button>
      )
  }
}


export default Square;