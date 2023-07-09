/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// Get moves list for given board position(x, y);
const getMoves = (x, y) => {
  // Checks if the given coordinates are on the board
  const checkCoordinates = (array) => {
    const trueCheck = ((array[1] < 8 && array[1] > -1) && (array[0] < 8 && array[0] > -1));
    return (trueCheck) ? array : undefined;
  };
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

// Create AdjacencyList corresponding to all chess board vertices.
const board = (() => {
  // i for loop = y, j for loop = x;
  const adjacencyList = [];
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) { adjacencyList.push([[j, i], getMoves(j, i)]); }
  }
  return adjacencyList;
})();

const getKey = (coordinates) => {
  const x = coordinates[0]; const y = coordinates[1];
  return x + 8 * y;
};

const bfs = (source) => {
  const bfsInfo = [];
  for (let i = 0; i < board.length; i += 1) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    };
  }
  bfsInfo[getKey(source)].distance = 0;

  const queue = [];
  queue.push(getKey(source));

  while (queue.length) {
    let u = queue.shift();

    for (let i = 0; i < board[u][1].length; i += 1) {
      let v = getKey(board[u][1][i]);
      if (bfsInfo[v].distance === null) {
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        bfsInfo[v].predecessor = u;
        queue.push(v);
      }
    }
  }
  return bfsInfo;
};

const knightMoves = (source, destination) => {
  const data = bfs(source);
  // Start while loop from destination's predecessors
  let { predecessor } = data[getKey(destination)];
  let array = [];

  // board[x][0] x = key, 0 returns vertice
  while (data[predecessor].predecessor !== null) {
    array.push(board[predecessor][0]);
    predecessor = data[predecessor].predecessor;
  }

  array.reverse();
  array.unshift(source);
  array.push(destination);
  console.log(`You've made it in ${array.length - 1} moves! Here's your path:`);
  for (let i = 0; i < array.length; i += 1) { console.log(array[i]); }
};

knightMoves([3, 4], [1, 0]);
