import React from 'react';
import { useState } from 'react';

function Square({value, onSqareClick}){


  return (<button className='square' onClick={onSqareClick}>{value}</button>)
}


export default function Board() {

  const [xIsnext, setXIsNext]= useState(true);
  const [squares, setSquares]= useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquare = squares.slice();
    if(xIsnext){
      nextSquare[i]="X";
    } else {
      nextSquare[i]="0";
    }
   
    setSquares(nextSquare);
    setXIsNext(!xIsnext);
  }

  const winner= calculateWinner(squares);
  let status;
  if(winner){
    status='Winner: '+ winner;
  } else{
    status='Next move is: '+ (xIsnext? "X":"0");
  }


  return (
    <React.Fragment>
      <div className="status">{status}</div>
      <div className='board-row'>
          <Square value={squares[0]} onSqareClick={()=> handleClick(0)}/>
          <Square value={squares[1]} onSqareClick={()=> handleClick(1)}/>
          <Square value={squares[2]} onSqareClick={()=> handleClick(2)}/>
      </div>
      <div className='board-row'>
          <Square value={squares[3]} onSqareClick={()=> handleClick(3)}/>
          <Square value={squares[4]} onSqareClick={()=> handleClick(4)}/>
          <Square value={squares[5]} onSqareClick={()=> handleClick(5)}/>
      </div>
      <div className='board-row'>
          <Square value={squares[6]} onSqareClick={()=> handleClick(6)}/>
          <Square value={squares[7]} onSqareClick={()=> handleClick(7)}/>
          <Square value={squares[8]} onSqareClick={()=> handleClick(8)}/>
      </div>
    </React.Fragment>
  );
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
      return squares[a];
    }
  }
  return null;
}
