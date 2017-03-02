import Timeago from 'timeago.js'

export function render () {
  return { attrs: { datetime: new Date().toISOString() } }
}

export function mount (ctx, props, el) {
  if (process.env.PENGUIN_ENV === 'development') {
    el.innerHTML = '- dynamic time -'
    return
  }
  new Timeago().render(el)
}
