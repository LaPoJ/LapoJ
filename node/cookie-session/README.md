## cookie 

- 本地存储

- 怎么来

  - `js` 来操作`cookie` 

    - ```js
      	cookie: {
        name: 
      	value:
      	path: cookie 在哪个路径下生效
        domain: 
      }
      
      // 可读性
      document.cookie 
      
      // 可写性
      document.cookie = 'name=google'
      document.cookie = 'name=google;path=/user'
      document.cookie = ''
      
      // 作用范围
      domain + path
      // 在域名什么路径下生效
      // 浏览器检查存储的 cookie, 会发送给服务端
      // 而且：http 传输报文的大小，放在 cookie 请求头里面发送
      ```

  - 服务端

    > 通过 `set-cookie` 响应头设置 `cookie`
    >
    > ```js
    > ctx.cookies.set('user','user', {
    >   path: '/user'
    > })
    > 
    > Response Headers:
    >  	Set-Cookie：user=user; path = /user   
    > ```
    >
    > 

  - 路径

    > `/`		/所有路径
    >
    > `/user`		`/user user`   以及 `user `下面的
    >
    > `/user/abc`	`/user/abc`    `user/abc` 以及  下面的	



- `httpOnly` 的作用

  - 其值为 `true` 或 `false` ；默认值为： `true`

  - 为 `true` 时不能通过 `js` 来获取 `cookie` 的值

    - 出于安全考虑

  - `maxAge` : 在一定时间之后将 `cookie` 清除

    - > `koa`: 时间为毫秒
      >
      > `js`: 时间单位为秒

  - `secure` : 安全，只在 `https` 传输协议中

1. 用途：

   状态管理，t

   用户的个性化设置，f

## session

会话： 靠后台实现

> 很多个用户，产生很多个 `seeeion` ，用户会话的时候通过自己 `sessionId` 查询自己的状态
>
> `cookie`:  `sessionId=id`