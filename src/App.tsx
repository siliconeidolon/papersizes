import './App.css'

import  { ReactElement, CSSProperties } from 'react'

import { data } from './data'

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

  const width = points[0]
  const height = points[1]

  const style: CSSProperties = {
    width,
    height,
    maxWidth: width,
    maxHeight: height,
    minWidth: width,
    minHeight: height
  }

  return (
    <div className="sheet" style={style}>
      <span className="sheet-name">{name}</span>
      <p>mm: {`${mm[0]}x${mm[1]}`}</p>
      <p>in: {`${inches[0]}x${inches[1]}`}</p>
      <p>pts: {`${points[0]}x${points[1]}`}</p>
    </div>
  )
}
