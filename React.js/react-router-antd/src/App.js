import React from 'react'
// , Link, Redirect
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import PageLayout from './page/Layout'
// import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={ PageLayout } ></Route>
      </Router>
    </div>
  )
}

