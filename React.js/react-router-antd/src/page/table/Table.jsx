import React from 'react'
import { Table, Button  } from 'antd'

export default class TableIndex extends React.Component{

  state = {
    msgs: [
      {
        time: '2019-6-18',
      },{
        time: '2019-6-19'
      }
    ]
  }

  handlePushTime = () => {
    const data = new Date()
    const dateLocal = data.toLocaleString()
    const msgs = this.state.msgs.slice(0)
    this.setState({
      msgs: msgs.concat({ time: dateLocal })
    })
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.handlePushTime()
    // }, 3000);
  }

  render() {
    const { location } = this.props
    const { msgs } = this.state

    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      }
    ]

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#"> {text} </a>
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },{
        title: '操作',
        key: 'key',
        align: 'center',
        width: 200,
        render: (text, card) => {
          return (
            <div >
              <Button type="primary" ><a href="#">编辑</a></Button>
              <Button type="danger" ><a href="#">删除</a></Button>
              {/* 正在操作的key: { card.key + card.name + card.age + card.address } */}
            </div>
          )
        }
      }
    ]

    return (

      <div>
        {/* { location.search } */}
        <hr/>
        {/* {  msgs.map((msg, i) => { return ( <Message key={i} msg={ msg } /> ) }) } */}
        <Table dataSource={dataSource} columns={columns}></Table>
      </div>
    )
  }
}

function Message(props) {
  const { msg } = props
  const { time } = msg
  return (
    <li>
      { time }
    </li>
  )
}