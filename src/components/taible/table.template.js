const CODES = {
  A: 65,
  Z: 90
}

function createCell(_, col) {
  return `
    <div class="cell selected" contenteditable data-col="${col}"></div>
  `
}
function createCol(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function CreateRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
   <div class="row" data-type="resizable">
     <div class="row-info">
       ${index ? index : ''}
      ${resize}
     </div>
     <div class="row-data">${content}</div>
   </div>  
    `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A +1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')

  // eslint-disable-next-line new-cap
  rows.push(CreateRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')
    // eslint-disable-next-line new-cap
    rows.push(CreateRow(i +1, cells))
  }
  {return rows.join('')}
}
