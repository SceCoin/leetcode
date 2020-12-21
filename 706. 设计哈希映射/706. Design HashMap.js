class MyHashMap {
  constructor() {
    this.data = {};
  }
  put(key, value) {
    // 向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
    this.data[key] = value;
  }
  get(key) {
    // 返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
    return this.data[key] || this.data[key] === 0 ? this.data[key] : -1;
  }
  remove(key) {
    // 如果映射中存在这个键，删除这个数值对。
    delete this.data[key];
  }
}
