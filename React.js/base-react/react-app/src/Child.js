import React, { Component } from 'react';

export default class Child extends Component{
  state = {

  }
  handleClick = (e) => {
    console.log(this)
    this.other()
    console.log(e.target.innerHTML)

  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      inputVal: e.target.value
    })
    console.log(this.state);

  }
  other () {
    console.log('other')

  }
  render() {
    return (
      <div onClick={this.handleClick}>
        { this.props.msg }
        <input type="text" placeholder="请输入内容" value={this.state.inputVal} onChange={this.handleChange}/>
      </div>
    )
  }
}