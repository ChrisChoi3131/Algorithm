from typing import List


class TreeNode:
    def __init__(self, val=None, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def preorder_recursion(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal

    def helper(node: TreeNode):
        nonlocal traversal
        if not node:
            return
        traversal.append(node.val)
        helper(node.left)
        helper(node.right)

    helper(root)
    return traversal


def preorder_iteration(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal
    stack = [root]
    while stack:
        node = stack.pop()
        traversal.append(node.val)
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)

    return traversal


def preorder_iteration_test(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal
    stack = [root]
    while stack:
        node = stack.pop()
        traversal.append(node.val)
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
    traversal.reverse()
    return traversal


def preorder_morris(root: TreeNode) -> List[int]:
    traversal = []
    node = root
    while node:
        if not node.left:
            traversal.append(node.val)
            node = node.right
            continue

        predecessor: TreeNode = node.left
        while predecessor.right and predecessor.right != node:
            predecessor = predecessor.right

        if not predecessor.right:
            traversal.append(node.val)
            predecessor.right = node
            node = node.left
        else:
            predecessor.right = None
            node = node.right

    return traversal


def inorder_recursion(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal

    def helper(node: TreeNode):
        nonlocal traversal
        if not node:
            return
        helper(node.left)
        traversal.append(node.val)
        helper(node.right)

    helper(root)
    return traversal


def inorder_iteration(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal
    stack = [(root, False)]
    while stack:
        node, is_checked = stack.pop()
        if is_checked:
            traversal.append(node.val)
            continue
        if node.right:
            stack.append((node.right, False))
        stack.append((node, True))
        if node.left:
            stack.append((node.left, False))

    return traversal


def inorder_morris(root: TreeNode) -> List[int]:
    traversal = []
    node = root
    while node:
        if not node.left:
            traversal.append(node.val)
            node = node.right
            continue

        predecessor: TreeNode = node.left
        while predecessor.right and predecessor.right != node:
            predecessor = predecessor.right

        if not predecessor.right:
            predecessor.right = node
            node = node.left
        else:
            traversal.append(node.val)
            predecessor.right = None
            node = node.right
    return traversal


def postorder_recursion(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal

    def helper(node: TreeNode):
        nonlocal traversal
        if not node:
            return
        helper(node.left)
        helper(node.right)
        traversal.append(node.val)

    helper(root)
    return traversal


def postorder_iteration(root: TreeNode) -> List[int]:
    traversal = []
    if not root:
        return traversal
    stack = [(root, False)]
    while stack:
        node, is_checked = stack.pop()
        if is_checked:
            traversal.append(node.val)
            continue
        stack.append((node, True))
        if node.right:
            stack.append((node.right, False))
        if node.left:
            stack.append((node.left, False))

    return traversal


def postorder_morris(root: TreeNode) -> List[int]:
    traversal = []
    node = root
    while node:
        if not node.right:
            traversal.append(node.val)
            node = node.left
            continue
        predecessor: TreeNode = node.right
        while predecessor.left and predecessor.left != node:
            predecessor = predecessor.left
        if not predecessor.left:
            traversal.append(node.val)
            predecessor.left = node
            node = node.right
        else:
            predecessor.left = None
            node = node.left
    traversal.reverse()
    return traversal


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left = TreeNode(6)
root.right.right = TreeNode(7)

print("preorder_recursion: ", preorder_recursion(root))
print("preorder_iteration: ", preorder_iteration(root))
print("preorder_morris:    ", preorder_morris(root))


print("inorder_recursion:  ", inorder_recursion(root))
print("inorder_iteration:  ", inorder_iteration(root))
print("inorder_morris:     ", inorder_morris(root))

print("postorder_recursion:", postorder_recursion(root))
print("postorder_iteration:", postorder_iteration(root))
print("postorder_morris:   ", postorder_morris(root))
print("preorder_test:      ", preorder_iteration_test(root))
