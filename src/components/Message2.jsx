// __________________No History included__________________________
function Message({ won, nxt, arr }) {
  let message = won ? `Winner is ${won}` : `Next Player is ${nxt}`;
  let full = arr.every((i) => {
    if (i === "X" || i === "O") {
      return true;
    }
  });

  return (
    <h2 className={full && !won ? "text-orange" : won ? "text-green" : ""}>
      {full && !won ? `Game Draw` : message}
    </h2>
  );
}

export default Message;
