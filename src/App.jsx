import './styles.scss';
import Board from './components/Board';
function App() {
  return (
    <div className="app">
      <h1 className="text-green">
        TIC <span className="text-orange">TAC</span> TOE{' '}
      </h1>
      <Board />
    </div>
  );
}

export default App;
