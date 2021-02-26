// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.

export class TreeNode {
  constructor(data) {
    this._data = data
    this._left = null
    this._right = null
  }

  get data() {
    return this._data
  }

  get right() {
    return this._right
  }

  get left() {
    return this._left
  }

  set right(element) {
    this._right = element
  }

  set left(element) {
    this._left = element
  }

  insert(element) {
    if (this._data < element) {
      this._right = new TreeNode(element) 
    } else {
      this._left = new TreeNode(element)
    }
  }
}
