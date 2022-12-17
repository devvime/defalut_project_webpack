import $ from 'jquery'
import './nav.sass'
import html from './nav.html'
import { view } from '../../environment/view.js'
import Mustache from 'mustache'

export default class Nav {

  constructor() {
    this.init()
  }

  async init() {
    await this.render()
  }

  render() {
    const rendered = Mustache.render(html)
    $('#header').append(view(rendered))
  }
}