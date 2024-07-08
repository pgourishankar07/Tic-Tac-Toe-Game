import { useState } from 'react';
import Square from './Square';
import Win from '../winner';
import Message from './Message';
import History from './History';

const NEW_GAME = [{ sq: Array(9).fill(null), plyr: false }];

function Board() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currMov, setCurrmov] = useState(0);
  const gamingBorad = history[currMov];
  let { Winner, winSq } = Win(gamingBorad.sq);
  console.log({ history, currMov });

  function handleSqClick(clkPos) {
    if (gamingBorad.sq[clkPos] || Winner) {
      return;
    }

    setHistory(curHis => {
      const isTraversing = currMov + 1 !== curHis.length;
      const lastGamingState = isTraversing
        ? curHis[currMov]
        : history[history.length - 1];
      const nextSqState = lastGamingState.sq.map((Val, index) => {
        if (clkPos === index) {
          return lastGamingState.plyr ? 'X' : 'O';
        }
        return Val;
      });
      const base = isTraversing
        ? curHis.slice(0, curHis.indexOf(lastGamingState) + 1)
        : curHis;
      return base.concat({ sq: nextSqState, plyr: !lastGamingState.plyr });
    });
    setCurrmov(mov => mov + 1);
  }

  function moveTo(move) {
    if (move === 0) {
      setHistory(NEW_GAME);
      setCurrmov(move);
    } else {
      setCurrmov(move);
    }
  }

  function sqRender(i) {
    const isWinSq = winSq.includes(i);
    return (
      <Square
        value={gamingBorad.sq[i]}
        onCh={() => handleSqClick(i)}
        isWinSq={isWinSq}
      />
    );
  }

  return (
    <div className="app">
      <Message won={Winner} gamingBorad={gamingBorad} />
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
      <History history={history} moveTo={moveTo} currMov={currMov} />
    </div>
  );
}

export default Board;
