// Source: Cracking the Coding Interview, 2.1
//
//Write code to remove duplicates from an unsorted linked list.

function LinkedList() {
  this.head = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

LinkedList.prototype.append = function(val) {
  var node = new Node(val);
  var curr = this.head;

  if (!curr) {
    this.head = node;
    return;
  }

  while (curr.next) {
    curr = curr.next;
  }
  curr.next = node;
};

// Method #1: No Additional Data Storage
function removeDups(list) {
  var curr = list.head;
  while (curr) {
    var runner = curr.next;
    var prev = curr;
    while (runner) {
      if (runner.val === curr.val) {
        prev.next = runner.next;
        runner = runner.next;
      } else {
        prev = runner;
        runner = runner.next;
      }
    }
    curr = curr.next;
  }
  return list;
}

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(2);
console.log(removeDups(list));

// Method 2: Track Values
function removeDupsHT(list) {
  var seen = {};
  var curr = list.head;
  var prev;
  while (curr) {
    if (curr.val in seen) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      seen[curr.val] = null;
      prev = curr;
      curr = curr.next;
    }
  }
  return list;
}

var list = new LinkedList();
list.append(1);
list.append(1);
list.append(2);
console.log(removeDupsHT(list));
