/**
 * 防抖
 * func await
 */
export function debounce (func, wait) {
  var result, timeout
  return function() {
    // this 、 参数
    // var context = this
    var args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      result = func.apply(this, args)
    }, wait)
    return result
  }
}

/**
 * 可用于装饰的防抖
 */
export function decDebounce (wait) {
  return function (target, key, descriptor) {
    var callBack = descriptor.value
    var fn = debounce(callBack, wait)
    descriptor.value = fn
  }
}

export function decArrowDebounce(wait){
  return function (target, key, descriptor) {
    // 拿到原来的
    console.log('target--------------------------')
    console.log(target)
    console.log('key---------------------------')
    console.log(key)
    console.log('descriptor------------------------')
    console.log(descriptor)
    var callBack = descriptor.initializer && descriptor.initializer()
    var fn = debounce(callBack, wait)
    // value 属性 -> 方法
    // get 方法 -> 属性
    // descriptor.value
    // return { }
    // 改变原来的 || 返回一个新的
    return {
      configurable: true,
      get: function(){
        return fn
      }
    }
  }
}

/**
 *
 * @param {string} displyaname
 * class 修饰组件
 */
export function decDisplayName(displayname){
  return function(target) {
    target.displayName = displayname
  }
}