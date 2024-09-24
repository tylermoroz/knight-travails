#!/usr/bin/node

class SquareNode {
  constructor(val) {
    this.val = val;
    this.neighbors = new Array();
  }
}

const isValidMove = (x, y, visited) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8 && !visited[x][y];
};

const createAdjacencyList = (x, y) => {
  const adjList = new Map();
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
  adjList.set(["x", new Array()]);
  adjList.set(["y", new Array()]);

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;
    if (!adjList.has(nx)) {
      adjList.set(nx, new Array());
    }
    if (!adjList.has(ny)) {
      adjList.set(ny, new Array());
    }
    adjList.get(nx).push(ny);
  }
  return adjList;
};

// const knightMoves = (start, target) => {
//   //bfs
// };

const adjacencyList = createAdjacencyList(3, 3);

console.log(adjacencyList);
