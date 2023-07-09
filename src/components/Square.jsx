function Square({ value, onCh, isWinSq }) {
  //destructuring the props object eg: props={value:'1',onCh:'function'}
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
        isWinSq ? 'winning' : ''
      }`}
      onClick={onCh}
    >
      {value}
    </button>
  );
}

export default Square;
