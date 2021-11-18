import './App.css'

import  { ReactElement, CSSProperties } from 'react'

import { data } from './data'
import { Sheet } from './Sheet'

function App(): ReactElement {

  return (
    <div className="app">
      {data[0].sizes.map(size => {
        return (
          <Sheet key={size.name} paperSize={size} />
        )
      })}
    </div>
  )
}

export default App
