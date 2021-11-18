import { CSSProperties } from "react"
import { PaperSize } from "./types"
import { useState } from "react"

const MODES = ["mm", "in", "pt"]

export const Sheet = ({ paperSize }: { paperSize: PaperSize }) => {
  const [modeIdx, setModeIdx] = useState(0)
  const { name, mm, points, inches } = paperSize

  const width = points[0]
  const height = points[1]

  const style: CSSProperties = {
    width,
    height,
    maxWidth: width,
    maxHeight: height,
    minWidth: width,
    minHeight: height,
  }

  const handleClick = () => {
    if (modeIdx < MODES.length - 1) {
      setModeIdx(modeIdx + 1)
    } else {
      setModeIdx(0)
    }
  }

  return (
    <div
      className="sheet"
      style={style}
      onClick={handleClick}
      title="Click to change measurement"
    >
      <span className="sheet-name">{name}</span>
      {modeIdx === 0 && <p>mm: {`${mm[0]}x${mm[1]}`}</p>}
      {modeIdx === 1 && <p>in: {`${inches[0]}x${inches[1]}`}</p>}
      {modeIdx === 2 && <p>pts: {`${points[0]}x${points[1]}`}</p>}
    </div>
  )
}
