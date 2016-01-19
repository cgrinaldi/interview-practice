// Source: Cracking the Coding Interview, 4.1
//
// Implement a function to check if a binary tree is balanced. For the purposes
// of this question, a balanced tree is defined to be a tree such that the heights
// of the two subtrees of any node never differ by more than one.
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Node.prototype.addLeft = function(val) {
  var node = new Node(val);
  this.left = node;
  return node;
};

Node.prototype.addRight = function(val) {
  var node = new Node(val);
  this.right = node;
  return node;
};

function isBalanced(node) {
  var heightLeft = findHeight(node.left);
  var heightRight = findHeight(node.right);
  if (Math.abs(heightLeft - heightRight) > 1) return false;
  return true;
}

function findHeight(node) {
  if (!node) return 0;
  return 1 + Math.max(findHeight(node.left), findHeight(node.right));
}

var a = new Node(1);
var b = a.addLeft(2);
var c = a.addRight(3);
var d = b.addLeft(4);
var e = d.addRight(5);

console.log(isBalanced(a)); // should equal false
