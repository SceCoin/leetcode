class MyStack {
  queue1: any[]
  queue2: any[]

  constructor() {
    this.queue1 = []
    this.queue2 = []
  }

  push(x: number): void {
    this.queue1.push(x)
  }

  pop(): number {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    const x = this.queue1.shift()

    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift())
    }

    return x
  }

  top(): number {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift())
    }

    const x = this.queue1[0]
    this.queue2.push(this.queue1.shift())

    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift())
    }

    return x
  }

  empty(): boolean {
    return this.queue1.length === 0
  }
}

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
