import React from 'react'
import { Input, Button, Divider, Row, Col } from 'antd'

function Filed(props){
  const { value, index } = props

  return (
    <div>
      <div style={{ height: 50}}>
        <Row justify="center" align="middle" type="flex">
          <Col span={4} ><span >姓名：</span></Col>
          <Col span={12}>
            <Input value={ value.name } placeholder="姓名" onChange= { (e) => { props.onChange(e.target.value, 'name', index)
            }}/>
          </Col >
        </Row>
      </div>
      <Divider />
      <div style={ {width: 350}}>
        地址<Input value={ value.address } placeholder="地址"
                onChange= { (e) => {
                  props.onChange(e.target.value, 'address', index)
                  }}
            />
      </div>
      <Divider />

      <Button type="danger" >删除</Button>
    </div>
  )
}


export default class DynamicsField extends React.Component{

  state = {
    lists: [{
      name: '',
      address: ''
    }]
  }

  handle = (value, key, i) => {
    const lists = this.state.lists.slice(0)
    const obj = lists[i]
    const newObj = {
      ...obj,
      [key]:value
    }

    lists[i] = newObj
    this.setState({
      lists
    })
  }

  handleAddFiled = () => {
    let lists = this.state.lists.slice(0)
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }

  render () {
    const { lists } = this.state
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Filed key={i} value={ list } onChange={ this.handle } index={i}/>
          })
        }
        <Button type="primary" onClick={ this.handleAddFiled }>添加</Button>
      </div>
    )
  }
}