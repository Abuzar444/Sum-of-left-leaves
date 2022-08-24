class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumOfLeftLeaves = (root) => {
    let sum = 0
    const aux = (node) => {
        if (!node) {
            return
        }
        if (node.left) {
            aux(node.left)
        }
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val
        }
        if (node.right) {
            aux(node.right)
        }
    }
    aux(root)
    return sum
}

console.log(sumOfLeftLeaves(a))