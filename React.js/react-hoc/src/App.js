import React from 'react'
import './App.css'

import WithLogin from './components/WithLogin';
import LoginStatus from './components/LoginStatus';
import ShopCart from './components/ShopCart';

const WithLoginStatus = WithLogin(LoginStatus)
const WithShopCart = WithLogin(ShopCart)

function App() {
  return (
    <React.Fragment>
      {/* <LoginStatus />
      <ShopCart /> */}
      <WithLoginStatus />
      <WithShopCart a="1" b="2"/>
    </React.Fragment>
  );
}

export default App;
