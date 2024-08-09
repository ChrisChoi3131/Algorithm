export class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
export function createBinaryTreeFromArr(arr): TreeNode | null {
  if (!arr || !arr.length) return null;
  const root: TreeNode = new TreeNode(arr[0]);
  let i = 1;
  const queue = [root];
  while (i < arr.length && queue) {
    const node = queue.pop();
    if (arr[i]) {
      node.left = new TreeNode(arr[i]);
      queue.unshift(node.left);
    }
    i++;
    if (i < arr.length && arr[i]) {
      node.right = new TreeNode(arr[i]);
      queue.unshift(node.right);
    }
    i++;
  }
  return root;
}

const a = '1';
const b = 1;
