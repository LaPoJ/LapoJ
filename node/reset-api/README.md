## restful api

  浏览器与服务器 通信方式的一种设计风格

- restful 的世界里， 一切资源

- url 来唯一定位资源的识别符
  /posts/1

- 添加一条 comment 怎么办 ？ /comment/2
  ```json
  {
    "id": 2,
    "body": "new comment",
    "postId": 1
  }
  ```

- 设计有意义的URL
  资源     状态改变
  POST  /comments     加一条评论 id:2

  修改内容
  	/comments/2     body: ‘最美下雨天’

  |  操作  | SQL方法 | HTTP动词  |
  | :----: | :-----: | :-------: |
  | CREATE | INSERT  |   POST    |
  |  READ  | SELECT  |    GET    |
  | UPDATE | UPDATE  | PUT/PATCH |
  | DELETE | DELETE  |  DELETE   |

  PARCH只要给一部分

  状态的切换，使用定义的谓语动词