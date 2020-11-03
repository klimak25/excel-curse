import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.componets = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.componets = this.componets.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      $el.html(component.toHTMl())
      $root.append($el)
      return component
    })
    return $root
  }
  render() {
    this.$el.append(this.getRoot())
    this.componets.forEach(component => component.init())
  }
}
