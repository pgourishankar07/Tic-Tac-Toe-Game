function Message({ won, gamingBorad }) {
  let { sq, plyr } = gamingBorad;
  let message = won ? `Winner is ${won}` : `Next Player is ${plyr ? 'X' : 'O'}`;
  let full = sq.every(i => {
    if (i === 'X' || i === 'O') {
      return true;
    }
  });

  return (
    <h2 className={!won ? '' : won === 'X' ? 'text-green' : 'text-orange'}>
      {full && !won ? `Game Draw` : message}
    </h2>
  );
}
// full && !won ? 'text-orange' : won ? 'text-green' : ''
// won === 'X' ? 'text-green' : 'text-orange'
export default Message;
