export default function Winner(sq) {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (sq[a] && sq[a] === sq[b] && sq[b] === sq[c]) {
      return { Winner: sq[a], winSq: combinations[i] };
    }
  }
  return { Winner: null, winSq: [] };
}
