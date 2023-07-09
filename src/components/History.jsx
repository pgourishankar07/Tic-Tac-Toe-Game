function History({ history, moveTo, currMov }) {
  return (
    <div>
      <h2>Current Game History</h2>
      <div className="history-wrapper">
        <ul className="history">
          {history.map((i, index) => (
            <li key={index}>
              <button
                type="button"
                className={
                  index === 0
                    ? 'btn-reset'
                    : `btn-move ${currMov === index ? 'active' : ''}`
                }
                onClick={() => {
                  moveTo(index);
                }}
              >
                {index === 0 ? 'Start a New Game' : `Go to Move # ${index}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// `btn-move ${currMov === index ? 'active' : ''}`
export default History;
