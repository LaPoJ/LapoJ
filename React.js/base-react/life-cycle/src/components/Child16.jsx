import React from 'react'

export default class Child16 extends React.Component{

  state = {
    count: 1
  }

  /**
   * 更新 state
   * 根据返回值 {}
   * 不更新 可以用 return null
   *
   *  willMount props setState
   */
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return {
      ...props,
      ...state
    }
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 999
  }

  componentDidUpdate(preProps, preState, a) {
    console.log('componentDidUpdate', a)
  }

  handleStateChange = () => {
    this.setState({
      a: 10
    })
  }

  render() {
    console.log('渲染时state：', this.state)
    const { count } = this.state
    return (
      <div>
        <button onClick={ this.handleStateChange }>Change State</button>
        <hr/>
        Child16 Component: { count }
      </div>
    )
  }
}