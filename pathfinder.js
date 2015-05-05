// Dijkstra's Algorithm

function getNodeWithLeastTraversalCost(nodes){
  // return node with least traversalCost
  // traverse array of nodes
  // check node.traversalCost
  // return node of lowest
  var low = nodes[0] || null;
  for (var i = 1; i<nodes.length; i++) {
    if (nodes[i].traversalCost < low.traversalCost) {
      low = nodes[i];
    }
  }
  return low;
}

function findShortestPath(currentNode, goalNode, path){ // where nodes between start and end have tentative costs.
  // return shortest path array based on graph of nodes with traversalCosts assigned

  path = path || [];

  if (currentNode === goalNode) {
    path.unshift(currentNode);
    return path;
  }

  if (currentNode.neighbors.length < 1) {

    return null;
  }

  // recursive case
  // find cheapest neighbor
  path.unshift(currentNode);
  currentNode = getNodeWithLeastTraversalCost(currentNode.neighbors);
  return findShortestPath(currentNode, goalNode, path);

}

function dijkstra(startNode, endNode, path){
  // return shortest path array of nodes



}

// Nodes for Graphs/Maps
function Node(name, cost){
  this.name = name;
  this.cost = cost;
  this.traversalCost = Infinity;
  this.neighbors = [];
};

Node.prototype.setTraversalCost = function(value) {
  this.traversalCost = value;
};

Node.prototype.connectTo = function(node){
  if(this.neighbors.indexOf(node) === -1){
    this.neighbors.push(node);
    node.connectTo(this);
  }
};

// A*

function astar(startNode, endNode){
  // return shortest path array of nodes
};

function createDistanceHeuristic(goalCoords){
  return function distanceHeuristic(currentCoords){ // closure/function generator is useful to avoid repeating goalCoords
    var deltaX = currentCoords.x - goalCoords.x;
    var deltaY = currentCoords.y - goalCoords.y;
    return Math.sqrt(deltaX*deltaX + deltaY*deltaY);
  };
};

Node.prototype.setCoords = function(x, y){ // don't worry about coords till A*
  this.coords = {x: x, y: y};
};
