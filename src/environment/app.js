import $ from 'jquery'
import page from "page"
import Mustache from 'mustache'

export const app = {
  routes: [],
  route(path, cb) {
    app.routes.push(page(path, () => new cb))
  },
  run() {
    app.routes.map(route => {
      route
    })
    page()
  },
  render(component) {
    return new component
  },
  createElement(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
  },
  draw(target, html, data = null) {    
    const rendered = Mustache.render(html, data)
    $(`#${target}`).html('')
    $(`#${target}`).append(app.createElement(rendered))
  }
}