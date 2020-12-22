class MinStack {
  stack: number[]
  minStack: number[]

  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(x: number): void {
    this.stack.push(x)
    if (this.minStack.length == 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x)
    }
  }

  pop(): void {
    const x = this.stack.pop()
    if (x !== void 0 && x === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
