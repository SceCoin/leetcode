/**
 * Initialize your data structure here.
 * 使用数组来设计集合, 性能太差.
 */
var MyHashSet = function () {
  this.ary = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const ary = this.ary;
  if (ary.indexOf(key) == -1) {
    ary.push(key);
  } else {
    return null;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const ary = this.ary;
  if (ary.indexOf(key) != -1) {
    ary.splice(ary.indexOf(key), 1);
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const ary = this.ary;
  if (ary.indexOf(key) != -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
