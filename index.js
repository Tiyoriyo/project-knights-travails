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
    return (trueCheck) ? array : null;
  };

  const createKnight = (x, y) => {
    const getMoves = () => {
      let move1 = [x - 1, y + 2];
      let move2 = [x + 1, y + 2];
      let move3 = [x - 2, y + 1];
      let move4 = [x + 2, y + 1];
      let move5 = [x - 2, y - 1];
      let move6 = [x + 2, y - 1];
      let move7 = [x - 1, y - 2];
      let move8 = [x + 1, y - 2];
      move1 = checkCoordinates(move1);
      move2 = checkCoordinates(move2);
      move3 = checkCoordinates(move3);
      move4 = checkCoordinates(move4);
      move5 = checkCoordinates(move5);
      move6 = checkCoordinates(move6);
      move7 = checkCoordinates(move7);
      move8 = checkCoordinates(move8);

      return [
        move1, move2, move3, move4, move5, move6, move7, move8,
      ];
    };

    const possibleMoves = () => {

    };

    return {
      x,
      y,
      moves: getMoves(),
    };
  };

  return {
    gameboard: createGameboard(),
    knight: createKnight(0, 0),
  };
};

const board = chess();

console.log(board.gameboard);
console.log(board.knight);
