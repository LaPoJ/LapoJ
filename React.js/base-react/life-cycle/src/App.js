import React from 'react'
import './App.css'
import Child from './components/Child'
import Child16 from './components/Child16'
// import Context from './components/Context'
import Context16 from './components/Context16'


export default class App extends React.Component {

  constructor(){
    super()
    this.objRef = React.createRef()
  }

  state = {
    count: 0,
    showChild: false
  }

  handleToggleChild = () => {
    const { showChild } = this.state
    this.setState({
      showChild: !showChild
    })
  }

  handleChildPropsChange = () => {
    let { count } = this.state
    count++
    this.setState({
      count
    })
  }

  componentDidMount () {
    this.refs.StringRef.innerHTML = 'newString Ref'
    this.methodRef.innerHTML = 'new mentod ref'
    this.objRef.current.innerHTML = 'new obj ref  '
  }

  render() {
    const { count, showChild }  = this.state
    return (
      <div>
        <span ref="StringRef">React ref</span>
        <hr/>
        <span ref={ (ref) => this.methodRef = ref }> Method Ref </span>
        <hr/>
        <span ref={ this.objRef}></span>
        <hr/>
        <div dangerouslySetInnerHTML={ {
          __html: ` <strong>Strong</strong>`
        }}></div>
        <hr/>
        <button onClick={ this.handleChildPropsChange }>
          child component props change
        </button>
        <button onClick={ this.handleToggleChild }> Toggle Child</button>
        <hr/>
        { showChild ? <Child count={ count }/> : <Child16 count={count} /> }
        {/* <Context>
          小华
          <p>姓名</p>
          18
          <p>年龄</p>
        </Context> */}

        <Context16>
          <p>react 16.X.X</p>
        </Context16>
      </div>
    )
  }
}
