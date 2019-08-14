import React from 'react';
import './App.css';
// import ConcurrentMode from './ConcurrentMode/index'
import StateHook from './hook/stateHook'
import PrepareForEffectHook from './hook/prepareForEffectHook';

function App() {
  return (
    <div className="App">
      {/* <ConcurrentMode /> */}
      <PrepareForEffectHook />
      <StateHook />
    </div>
  );
}

export default App;
