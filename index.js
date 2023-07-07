import linkedList from './modules/linkList.js';

const chess = () => {
  // Checks if the given coordinates are on the board
  const checkCoordinates = (array) => {
    const x = array[0]; const y = array[1];
    const trueCheck = ((y < 8 && y > -1) && (x < 8 && x > -1));
    return (trueCheck) ? array : undefined;
  };

  const getMoves = (x, y) => {
    const moveSequences = [
      [x - 1, y - 2], [x + 1, y - 2],
      [x - 2, y - 1], [x + 2, y - 1],
      [x - 2, y + 1], [x + 2, y + 1],
      [x - 1, y + 2], [x + 1, y + 2],
    ];
    const moveList = [];
    for (let i = 0; i < moveSequences.length; i += 1) {
      const move = checkCoordinates(moveSequences[i]);
      if (move) { moveList.push(move); }
    }
    return moveList;
  };

  const adjList = () => {
    const adjacencyList = [];
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const edgeList = linkedList();
        const moves = getMoves(i, j);
        for (let k = 0; k < moves.length; k += 1) {
          edgeList.append(moves[k]);
        }
        adjacencyList.push([[i, j], edgeList.list.head]);
      }
    }
    return adjacencyList;
  };

  return {
    adjList: adjList(),
  };
};

const board = chess();

console.log(board.gameboard);
console.log(board.adjList);
