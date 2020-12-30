class MinStack {

  stack: number[]
  min: number

  constructor() {
    this.stack = []
    this.min = Infinity
  }

  push(x: number): void {
    if (x < this.min) {
      this.min = x
    }

    this.stack.push(x)
  }

  pop(): void {
    if (this.stack[this.stack.length - 1] == this.min) {
      this.stack.pop()
      this.min = Math.min(...this.stack)
    } else {
      this.stack.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min
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
