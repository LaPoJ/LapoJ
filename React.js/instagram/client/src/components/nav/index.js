import React from 'react'
import { Menu, Dropdown, notification } from 'antd'
// import { Link } from 'react-router-dom'
import navcss from './index.scss'

export default class MyNav extends React.Component {
  constructor(){
    super()
    this.state  = {

    }
  }
  render () {
    const aboutMenu = (
      <Menu>
        <Menu.item>关于我</Menu.item>
        <Menu.item>退出登录</Menu.item>
      </Menu>
    );
    return (
      <nav className="page-header">
        <div className="header toggle">
          <div className="navigate">
            <Dropdown  overlay={ aboutMenu }>
              <a className="user">asdf</a>
              {/* <Link to={'/about'} className="user"></Link> */}
            </Dropdown>
          </div>
        </div>
      </nav>
    )
  }
}