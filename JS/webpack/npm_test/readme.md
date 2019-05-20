- /nodemodules
  不需要提交
- 开发有很多环境

/tests
  测试驱动开发， 提供代码的准确性

```javascript
  describe() //描述需要测试的功能

  //举例, 例子覆盖99%以上的情况是可以认为不存在问题
  it('举例', () => {
    expect(func(agr1, agr2)).to.equal(resulet)
  })
  //chai ecpect => index.spec.js

```