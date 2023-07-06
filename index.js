const chess = () => {
  const createGameboard = () => {
    const board = [];
    for (let i = 0; i < 8; i += 1) {
      const row = [];
      for (let j = 0; j < 8; j += 1) {
        row.push(j);
      }
      board.push(row);
    }
    return board;
  };

  const checkCoordinates = (array) => {
    const x = array[0];
    const y = array[1];
    const trueCheck = ((y < 8 && y > -1) && (x < 8 && x > -1));
    return (trueCheck) ? array : undefined;
  };

  const createKnight = (x, y) => {
    const getMoves = () => {
      const array = [
        [x - 1, y - 2], [x + 1, y - 2],
        [x - 2, y - 1], [x + 2, y - 1],
        [x - 2, y + 1], [x + 2, y + 1],
        [x - 1, y + 2], [x + 1, y + 2]];

      const array2 = [];
      let i = 0;

      while (i < array.length) {
        const move = checkCoordinates(array[i]);
        if (move) { array2.push(move); }
        i += 1;
      }
      return array2;
    };

    return { x, y, moves: getMoves() };
  };

  return {
    gameboard: createGameboard(),
    knight: createKnight(4, 4),
  };
};

function createAdjMatrix(v) {
  const array = [];
  for (let i = 0; i < v; i += 1) {
    const vArray = [];
    for (let j = 0; j < v; j += 1) {
      vArray.push(0);
    }
    array.push(vArray);
  }
  return array;
}

const board = chess();

console.log(board.gameboard);
console.log(board.knight);
