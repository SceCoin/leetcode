// 思路:  使用对象来设计集合, 对象实际就是 hash

class MyHashSet {
  data: object
  constructor() {
    this.data = {}
  }

  add(key: number): void {
    !this.data[key] && (this.data[key] = true)
  }

  remove(key: number): void {
    this.data[key] && (delete this.data[key])
  }

  contains(key: number): boolean {
    return !!this.data[key]
  }
}

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/
