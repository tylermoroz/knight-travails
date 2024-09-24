#!/usr/bin/node

const isValidMove = (x, y, visited) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8 && !visited[x][y];
};

const createAdjacencyList = (x, y, visited) => {
  const directions = [
    [2, 1],
    [1, 2],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const adjacentPositions = [];

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;
    if (isValidMove(nx, ny, visited)) {
      adjacentPositions.push([nx, ny]);
    }
  }
  return adjacentPositions;
};

const knightMoves = (start, target) => {
  const startX = start[0];
  const startY = start[1];
  const targetX = target[0];
  const targetY = target[1];

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
};

const adjacencyList = createAdjacencyList(3, 3, visited);

console.log(adjacencyList);
