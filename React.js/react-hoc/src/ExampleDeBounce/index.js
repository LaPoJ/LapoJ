 import React from 'react'
import { debounce, decDebounce, decArrowDebounce, decDisplayName } from './util';


@decDisplayName('CustomExampleDebounce')
class ExampleDebounce extends React.Component{

  // 防抖
  @decDebounce(1000)
  handleSubmit () {
    console.log('request submit')
  }

  // handleSubmit () {
  //   console.log('submit request')
  // }

  // handleSubmit = debounce(function() {
  //   console.log('request submit')
  // }, 1000)

  @decArrowDebounce(1000) handleBuy = () => {
    console.log('buy now')
  }

  render () {

    // console.log( this.handleBuy )
    // console.log( this.handleSubmit )

    return (
      <React.Fragment >
        <button onClick={ this.handleSubmit }>提交订单</button>
        <button onClick={ this.handleBuy }>立即购买</button>
      </React.Fragment>
    )
  }
}

export default ExampleDebounce