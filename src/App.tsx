import './App.css'

import  { ReactElement } from 'react'

import { data as sizes } from './data'

function App(): ReactElement {

  return (
    <div className="App">
      <pre>{JSON.stringify(sizes, null, 2)}</pre>
      {sizes[0].sizes.map(size => {
        return (
          <Sheet key={size.name} paperSize={size} />
        )
      })}
    </div>
  )
}

export default App

interface PaperSize {
  name: string
  mm: Array<number>
  points: Array<number>
  inches: Array<number>
}

export interface PaperFormat {
  name: string
  sizes: Array<PaperSize>
}

const Sheet = ({ paperSize }: { paperSize: PaperSize}) => {
  const { name, mm, points, inches } = paperSize
  return (
    <div style={{ width: points[0], height: points[1], background: 'beige' }}>{name}</div>
  )
}
