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
function createNode(val: number, left?: TreeNode | null, right?: TreeNode | null): TreeNode {
  return new TreeNode(val, left, right);
}
export const tests: { input: TreeNode | null; expected: string }[] = [{ input: createNode(1, createNode(2), createNode(3, createNode(4), createNode(5))), expected: createNode(1, createNode(2), createNode(3, createNode(4), createNode(5))) }];
