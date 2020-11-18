import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/taible/table.template'
import {resizeHandler} from '@/components/taible/table.resize'
import {shouldResize} from '@/components/taible/table.functions'

export class Taible extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    });
  }
  toHTMl() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
