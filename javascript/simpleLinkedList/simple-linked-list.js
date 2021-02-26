// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.

export class Element {
  constructor(value) {
    this._value = value
    this._next = null
  }

  get value() {
    return this._value
  }

  get next() {
    return this._next
  }

  set next(element) {
    this._next = element
  }
}

export class List {
  constructor(list = []) {
    if (list.length === 0) this._head = null

    list.forEach(item => {
      this.add(new Element(item))
    })

    this._length = list.length
  }

  add(nextValue) {
    if (this._head === null) {
      this._head = nextValue
    } else {
      nextValue.next = this._head
      this._head = nextValue
    }

    this._length = this._length + 1
  }

  get length() {
    return this._length
  }

  get head() {
    return this._head
  }

  toArray() {
    let arr = []
    let element = this._head

    while (element) {
      arr.push(element.value)
      element = element.next
    }

    return arr
  }

  reverse() {
    // toArray traverses the list in the opposite order it was created and spits out an array, which can then be fed into the new Array constructor :B
    return new List(this.toArray())
  }
}
