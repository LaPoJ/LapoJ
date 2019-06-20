import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Child from './Child'

//#regin
  // PureComponent
  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
//#regin

export default class App extends React.Component {

  state = {
    msg: '占学博'
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        msg: '占学博  有点憨...'
      })
    }, 3000);
  }

  renderFooter = () => {
    return (
      <footer>foot</footer>
    )
  }
  render() {
    const {msg} = this.state
    const red = 'red'
    const isRed = true
    const Main = (
      <p>main</p>
    )
    const lists = [1, 2, 3, 4, 5]
    const listsNode = lists.map((list, index) => <li key={index}>{list}</li>)

    return (
      <div className={isRed ? red : ''}>
        hello world
        { msg }
        { isRed ? <span>red</span> : <span>nored</span> }
        <ul>
          {
            lists.map((list, index) => <li key={index}>{list}</li>)
          }
        </ul>
        { listsNode }
        { Main }
        { this.renderFooter() }
        <Child msg={msg}/>
      </div>
    )
  }
}
