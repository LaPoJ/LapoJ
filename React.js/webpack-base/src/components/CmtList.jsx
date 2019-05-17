import React from "react";

import CmtItem from "@/components/CmtItem";

import cssobj from "@/css/cmtlist";

import "bootstrap/dist/css/bootstrap.css";

export default class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: "张三1", content: "哈哈1" },
        { id: 2, user: "张三2", content: "哈哈2" },
        { id: 3, user: "张三3", content: "哈哈3" },
        { id: 4, user: "张三4", content: "哈哈4" },
        { id: 5, user: "张三5", content: "哈哈5" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1 className={cssobj.title}>评论列表</h1>

        <div className="panel panel-primary" />
        {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}
        {this.state.CommentList.map(item => (
          <CmtItem {...item} key={item.id} />
        ))}
        <button className="btn btn-primary">按钮</button>
      </div>
    );
  }
}
