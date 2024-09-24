#!/usr/bin/node

class Graph {
  constructor() {
    this.adjList = new Map();
    this.visited = new Set();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex.toString())) {
      this.adjList.set(vertex.toString(), []);
    }
  }

  addEdge(vertex1, vertex2) {
    const key1 = vertex1.toString();
    const key2 = vertex2.toString();

    if (!this.adjList.has(key1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjList.has(key2)) {
      this.addVertex(vertex2);
    }

    this.adjList.get(key1).push(vertex2);
    // this.adjList.get(key2).push(vertex1);
  }

  generatePossibleMoves(vertex) {
    const [x, y] = vertex;
    const possibleMoves = [
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
    ];

    return possibleMoves.filter(([newX, newY]) => this.isValidMove(newX, newY));
  }

  buildPotentialKnightMoves(vertex) {
    if (this.visited.has(vertex.toString())) {
      return;
    }

    this.visited.add(vertex.toString());

    const moves = this.generatePossibleMoves(vertex);
    moves.forEach((move) => {
      this.addEdge(vertex, move);
      this.buildPotentialKnightMoves(move);
    });
  }

  display() {
    for (const [vertex, edges] of this.adjList) {
      console.log(vertex, edges);
    }
  }

  isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
}

const graph = new Graph();
graph.addVertex([0, 0]);
graph.buildPotentialKnightMoves([0, 0]);
graph.display();

// const createAdjacencyList = (x, y) => {
//   const adjList = new Map();
//   const directions = [
//     [2, 1],
//     [1, 2],
//     [2, -1],
//     [1, -2],
//     [-1, -2],
//     [-2, -1],
//     [-2, 1],
//     [-1, 2],
//   ];
//   adjList.set(["x", new Array()]);
//   adjList.set(["y", new Array()]);

//   for (const [dx, dy] of directions) {
//     const nx = x + dx;
//     const ny = y + dy;
//     if (!adjList.has(nx)) {
//       adjList.set(nx, new Array());
//     }
//     if (!adjList.has(ny)) {
//       adjList.set(ny, new Array());
//     }
//     adjList.get(nx).push(ny);
//   }
//   return adjList;
// };

// // const knightMoves = (start, target) => {
// //   //bfs
// // };

// const adjacencyList = createAdjacencyList(3, 3);

// console.log(adjacencyList);
