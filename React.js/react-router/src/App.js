import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

function Index() {
  return (
    <div>Home</div>
  )
}

function About() {
  return (
    <div>About</div>
  )
}

function User() {
  return <div>User</div>
}

function Protect() {
  return <div>Protect</div>
}

function Login() {
  return <div>Login</div>
}

/**
 * 进入页面之前, 鉴权
 * <PrivateRoute path="/user" component={} />
 */
function PrivateRoute(props) {
  const { path, component: Component } = props

  return (
    <Route path={ path  } render={
      () => {
        return false ? <Component /> : <Redirect to={ {pathname: '/login'} } ></Redirect>
      }
    }
    />
  )
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/user">User</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/protect">Protect</Link>  </li>
        </ul>
        { true ? <Route path="/" exact component={ Index }></Route> : <div>no router</div> }

        <Route path="/about" component= { About } ></Route>
        <PrivateRoute path="/user" component= { User } ></PrivateRoute>
        <Route path="/login" component={ Login } ></Route>
        <Route path="/protect" render={ () => {
          return false ? <Protect /> : <Redirect to={ { pathname: '/login', state: { from: '/protect' } }} />
        }}></Route>
      </Router>
    </div>
  )
}
