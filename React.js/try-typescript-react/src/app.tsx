import * as React from 'react'
import { Header, About } from './components/index'

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Header />
      App...
      <About />
    </div>
  )
}