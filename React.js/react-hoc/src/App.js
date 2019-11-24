import React from 'react'
import './App.css'

import WithLogin from './components/WithLogin'
import LoginStatus from './components/LoginStatus'
import ShopCart from './components/ShopCart'

// import ExampleMobx from './exampleMobx/index'
// import ExampleDeBounce from './ExampleDeBounce/index'

const WithLoginStatus = WithLogin(LoginStatus)
const WithShopCart = WithLogin(ShopCart)

function App() {
  return (
    <React.Fragment>

      {/* <LoginStatus /> */}


      {/* <ShopCart a={1} b={3} /> */}

      {/* <WithLoginStatus /> */}
      <WithShopCart a="1" b="2"/>

      {/* <ExampleMobx />

      <ExampleDeBounce /> */}

    </React.Fragment>
  );
}

export default App;
