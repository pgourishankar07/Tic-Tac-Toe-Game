function History({ history, moveTo, currMov }) {
  return (
    <div>
      <h2>Current Game History</h2>
      <div className="history-wrapper">
        <ol className="history">
          {history.map((i, index) => (
            <li key={index}>
              <button
                type="button"
                className={
                  index === 0
                    ? 'btn '
                    : `btn-move ${currMov === index ? 'active' : ''}`
                }
                onClick={() => {
                  moveTo(index);
                }}
              >
                {index === 0 ? 'Restart' : `Go to Move # ${index}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
// `btn-move ${currMov === index ? 'active' : ''}`
export default History;
