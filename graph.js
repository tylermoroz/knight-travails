class KnightTravails {
  constructor() {
    this.adjList = new Map();
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

  isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  knightMoves(node, target) {
    let visited = new Set();
    let q = [];
    let parentMap = new Map();

    visited.add(node.toString());
    q.push(node);
    parentMap.set(node.toString(), null);

    while (q.length !== 0) {
      let current = q.shift();

      if (current.toString() === target.toString()) {
        return this.reconstructPath(parentMap, target);
      }
      const neighbors = this.generatePossibleMoves(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.toString())) {
          visited.add(neighbor.toString());
          q.push(neighbor);
          parentMap.set(neighbor.toString(), current);
          this.addEdge(current, neighbor);
        }
      }
    }
    return null;
  }

  reconstructPath(parentMap, target) {
    let path = [];
    let current = target;
    while (current !== null) {
      path.push(current);
      current = parentMap.get(current.toString());
    }
    return path.reverse();
  }
}
