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

  const createKnight = (x, y) => {
    const getMoves = () => {
      const move1 = [x - 1, y + 2];
      const move2 = [x + 1, y + 2];
      const move3 = [x - 2, y + 1];
      const move4 = [x + 2, y + 1];
      const move5 = [x - 2, y - 1];
      const move6 = [x + 2, y - 1];
      const move7 = [x - 1, y - 2];
      const move8 = [x + 1, y - 2];
      return [move1, move2, move3, move4, move5, move6, move7, move8];
    };

    return {
      x,
      y,
      possibleMoves: getMoves(),
    };
  };

  return {
    gameboard: createGameboard(),
    knight: createKnight(4, 2),
  };
};

const board = chess();

console.log(board.gameboard);
console.log(board.knight);
