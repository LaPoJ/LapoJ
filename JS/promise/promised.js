function MyPromise(callback) {
  var self = this

  // 记录状态 null => pending; true => resolve; false => reject
  var state =null

  // 记录 resolve 的参数
  var param = null

  // then 方法返回的 promise 对象的 resolve 和 reject
  var nextResolve = null
  var nextReject = null

  // 记录 then 方法的参数 onFulfilled 和 onReject
  var asyncOnFulfilled = null
  var asyncOnReject = null


  // 执行并改变 Promise 的状态
  callback(resolve, reject)

  this.then = function(onFulfilled, onReject) {
    //返回一个新的 promise 对象
    return new self.constructor(function(resolve, reject){
      // 判断异步代码是否执行完毕 ( 是否 resolve 或者 reject)
      // 若执行完毕，则在 then 方法里面立即执行
      // 否则 就将 参数记录下来， 等待 state 就绪后再执行 ** 函数

      if (state === true) {
        doAsyncOnFulfilled(onFulfilled, resolve, reject)
      }else if (state === false) {
        doAsyncOnRejected(onReject, resolve, reject)
      }else{
        nextResolve = resolve
        nextReject = reject
        asyncOnFulfilled = onFulfilled
        asyncOnReject = onReject
      }
    })
  }

  // resolve 方法
  function resolve(data) {
    state = true
    param = data
    if (nextResolve) {
      doAsyncOnFulfilled(asyncOnFulfilled, nextResolve, nextReject)
    }
  }

  // reject 方法
  function reject(err) {
    state = false
    param = err
    if (nextReject) {
      doAsyncOnRejected(asyncOnReject, nextResolve, nextReject)
    }
  }

  function doAsyncOnFulfilled(onFulfilled, resolve, reject) {
    window.setTimeout(function(){
      // 判断 onFulfilled 是否为 function 不是则忽略
      if (typeof onFulfilled === 'function') {
        // 执行 onFulfilled 方法 获取返回值 promise()
        var promise = onFulfilled(param)

        // 如果 promise 为 undefined 执行 if
        // 如果 promise 为 MyPromise 对象 执行 else if
        // 如果 promise 为非 MyPromise 对象 执行 else
        if (promise === undefined) {
          resolve(param)
        }else if(promise.constructor === self.constructor) {
          // 等待传递进来的 promise 对象执行完毕 然后根据 promise 对象的状态执行 resolve 或者是 reject
          promise.then(function(param){
            resolve(param)
          }, function(param) {
            reject(param)
          })
        }else{
          // 执行 then 方法, 返回对象的 resolve
          resolve(promise)
        }
      }else{
        resolve(param)
      }
    }, 0)
  }

  function doAsyncOnRejected(onReject, resolve, reject) {
    window.setTimeout(function(){
      if (onReject === 'function') {
        var promise = onReject(param)

        if (promise === undefined) {
          reject(param)
        }else if(promise.constructor === self.constructor){
          promise.then(function (param) {
            resolve(param)
          }, function(param){
            reject(param)
          })
        }else{
          reject(promise)
        }
      }else{
        reject(param)
      }
    }, 0)
  }
}