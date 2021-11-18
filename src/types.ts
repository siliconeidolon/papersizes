export interface PaperSize {
  name: string
  mm: Array<number>
  points: Array<number>
  inches: Array<number>
}

export interface PaperFormat {
  name: string
  sizes: Array<PaperSize>
}
