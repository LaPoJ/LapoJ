import React from 'react'
// Badge
import { Layout, Row, Col, Avatar, Input,  Menu, Dropdown, Icon } from 'antd'
import { Link, Route } from 'react-router-dom'

import Table from './table/Table'
import Lable from './lable/Lable'
import Post from './post/Post'

const { Header, Footer, Sider, Content }  = Layout;

function DropMenu() {
  return (
    <Menu>
      <Menu.Item>
        {/* <a href="#">1</a> */}
        121
      </Menu.Item>
      <Menu.Item>
        {/* <a href="#">2</a> */}
        431242
      </Menu.Item>
    </Menu>
  )
}

export default class PageLayout extends React.Component{
  render() {
    return (
      <Layout>
        <Header style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', backgroundColor: '#FDEEE5'}}>
          <Row>
            <Col span={10}>React + Antd 实践</Col>
            <Col span={8}>
              <Input type="text" placeholder="请输入你想要的..." readOnly />
            </Col>
            <Col span={6}>
              <Avatar style={{backgroundColor: '#D9D2C2', marginRight: 20}}
              icon="user"
              ></Avatar>
              <Dropdown overlay={ DropMenu }>
                <span>Hi,
                  <Icon type="down"></Icon>
                </span>
              </Dropdown>
            </Col>

          </Row>
        </Header>
        <Layout>
          <Sider>
            <Menu style={{ width: 256, height: '90vh', overflow: 'hidden', minWidth: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              <Menu.SubMenu key="sub1" title={
                <span><Icon type="smile-0"></Icon>部分UI组件使用</span>
              }>
                <Menu.Item key="sub-1">
                  <Link to={ {
                    pathname: '/table',
                    search: '?type=all&a=1'
                  }} >表格</Link>
                </Menu.Item>
                <Menu.Item key="sub-2">
                  <Link to={'/lable'}>标签页</Link>
                </Menu.Item>
                <Menu.Item key="sub-3">
                  <Link to={'/post/989898'}>文章</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
          <Content style={{marginLeft: '5%'}}>
            {/* { this.props.children } */}
            <Route path="/table" component={ Table }/>
            <Route path="/lable" component={ Lable }/>
            <Route path="/post/:id" component={ Post } />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
