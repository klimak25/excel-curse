import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/taible/table.template'

export class Taible extends ExcelComponent {
  static className = 'excel__table'
  toHTMl() {
    return createTable(20)
  }
}
