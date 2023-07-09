// __________________No History included__________________________
import { useState } from "react";
import Square from "./Square";
import Win from "../winner";
import Message from "./Message";

function Board() {
  const [sq, setSq] = useState(Array(9).fill(null)); //creates an array sq with all null values [null,null,.....]
  const [plyr, setPlyr] = useState(false);

  let Winner = Win(sq);
  let nxtPlyr = plyr ? "X" : "O";

  function handleSqClick(clkPos) {
    if (sq[clkPos] || Winner) {
      // if the clicked postion is already clicked that means it does not have false value(null) so it doest not change anything
      return;
    }

    setSq((sq) => {
      //sq values will be same as sq
      return sq.map((Val, index) => {
        //Val----values of the array and index ---- index  ,eg :in map function 1st parameter willbe values and then index
        if (clkPos === index) {
          // where u have clicked at that array index 'X' is saved
          return plyr ? "X" : "O";
        }
        return Val;
      });
    });
    setPlyr(!plyr);
  }

  function sqRender(i) {
    return <Square value={sq[i]} onCh={() => handleSqClick(i)} />;
  }

  return (
    <div className="app">
      <Message won={Winner} nxt={nxtPlyr} arr={sq} />
      <div className="board">
        <div className="board-row">
          {sqRender(0)}
          {sqRender(1)}
          {sqRender(2)}
        </div>
        <div className="board-row">
          {sqRender(3)}
          {sqRender(4)}
          {sqRender(5)}
        </div>
        <div className="board-row">
          {sqRender(6)}
          {sqRender(7)}
          {sqRender(8)}
        </div>
      </div>
    </div>
  );
}

export default Board;
