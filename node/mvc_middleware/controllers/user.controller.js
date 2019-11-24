exports.login = async (req, res) => {
  console.log(req.body)
  // 参数验证  抽离模块
  // await model.query

  const msg = req.checkBody({
    username: {
      required: '用户名不能为空'
    },
    password: {
      required: '密码不能为空'
    },
    code: {
      required: '验证码不能为空'
    }
  })

  console.log(msg)

  if (msg) {
    // 出错处理
    return res.handleError(msg)
  }

  res.json({
    page: '登录'
  })
}