import React from 'react';
import Board from './Board';
import User from './User';
import Timer from './Timer'




class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        nameOne : "X",
        nameTwo : "O",
        minuteMain : 0,
        seconds : 0,
        firstScreen : true,
        toggleStatus : true
      };
    }
    firstInput(first){
      console.log(first.target.value)
      this.setState({nameOne:first.target.value})
    }

    secondInput(e){
      console.log(e.target.value)
      this.setState({nameTwo:e.target.value})
    }

    handleUser(){
      
      console.log(this.state.nameOne, this.state.nameTwo);
      this.setState({firstScreen : false})
    }

    timeRunner = () => {
      console.log("i'm running");
      console.log(this.state.toggleStatus)
      return(
      <div><Timer value = {this.state.toggleStatus}/><Timer value = {!this.state.toggleStatus}/></div>
      )
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        toggleStatus : !this.state.toggleStatus
      });
      // console.log('Status'+this.state.toggleStatus)
    }

  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }

    

    reseter(){
        window.location.reload(false);
    }

    

    

    secondscreen = ()=>{
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      let status;
      var winners = null;
      if (winner) {
        status = "Winner: " + winner[0];
        winners = [winner[1], winner[2], winner[3]]
        // console.log("Winner: "+ winners);
      } else {
        status = "Next player: " + (this.state.xIsNext ? this.state.nameOne : this.state.nameTwo);
      }

      return (
        <div>
          <br></br>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
              winners = {winners}
              toggle = {this.state.toggleStatus}
            />
            <br></br>
            <div className = "time">
              {/* {console.log(this.props.toggleStatus)} */}
              {this.timeRunner()}
            </div>
            <br></br>
            <button onClick = {this.reseter}>RESET</button>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <table>
              <thead>
              <tr><th>#</th><th>State</th><th>Player</th></tr>
              </thead>
              <tbody>
                {/* {moves} */}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      )
    }
  
    render() {
      const firstScreen = ()=>{
        return (
          <div>
            <div>
            <User firstInput = {(first) =>this.firstInput(first)} 
              secondInput = {(second) =>this.secondInput(second)} 
              handleUser = {() =>this.handleUser()}/>
            </div>
          </div>
        )
      }
      
      return (
      <div>
        <div className = "heading">
          <h2> Tic Tac Toe Game</h2>
        </div>
        <hr></hr>
        <br></br><br></br>
        {this.state.firstScreen ? firstScreen() : this.secondscreen()}
      </div>
    );
  }
}


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // console.log(a, b, c)
        return [squares[a], a, b, c];
      }
    }
    return null;
  }

  
  export default Game;




  
