import React from 'react'
import WithLogin from './WithLogin'

@WithLogin
export default class ShopCart extends React.Component{

  render () {
    const { a, b } = this.props
    return (
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>手机</li>
        <li>平板</li>
      </ul>
    )
  }
}

ShopCart.displayName = 'ShopCart'