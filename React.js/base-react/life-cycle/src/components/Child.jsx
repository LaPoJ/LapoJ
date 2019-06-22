import React from 'react'

export default class Child extends React.Component{
  state = {
    childCount: 0
  }

  handleChildCountChnage = () => {
    let { childCount } = this.state
    childCount++
    this.setState({
      childCount
    })
  }

  componentDidMount () {
    console.log('componentDidMount ')
    this.interval =  setInterval(() => {
      console.log('child serInterval')
    }, 1000)
  }
  componentWillMount () {
    console.log('componentWillMount ')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount ')
    clearInterval(this.interval)
  }

  // props 更新
  // 组件性能优化的时候需要的，控制不必要的更新
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate function')
    if (nextProps.count !== this.props.count) {
      return true
    }
    return true
  }

  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  componentWillUpdate () {
    console.log('componentWillUpdate function')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate function')
  }

  render(){
    const { count } = this.props
    const { childCount } = this.state
    console.log('render function')
    return (
      <div>
        Child component from App count: { count }
        <hr/>
        <button onClick={ this.handleChildCountChnage } >Child state Change</button>
        <hr/>
        childCount: { childCount }
      </div>
    )
  }
}