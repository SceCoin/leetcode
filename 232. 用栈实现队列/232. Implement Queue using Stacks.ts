class MyQueue {
  stack1: any[]
  stack2: any[]

  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x: number): void {
    this.stack1.push(x)
  }

  pop(): number {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }

    const x = this.stack2.pop()
    if (this.stack2.length > 0) {
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop())
      }
    }

    return x
  }

  peek(): number {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }

    const x = this.stack2[this.stack2.length - 1]

    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop())
    }

    return x
  }

  empty(): boolean {
    return this.stack1.length === 0
  }
}

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
