/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // 1. Base case: Return null if root is empty
    if (!root) {
        return null;
    }

    // 2. Perform the swap using a temporary variable (Safest way)
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // 3. Recurse down the tree
    invertTree(root.left);
    invertTree(root.right);

    // 4. Always return the root at the end
    return root;
};


console.log(invertTree([4, 2, 7, 1, 3, 6, 9]))