import $ from 'jquery'
import './home.sass'
import html from './home.html'
import { view } from '../../environment/view.js'
import Mustache from 'mustache'

export default class Home {

  constructor() {
    this.init()
  }

  async init() {
    $('#content').html('')
    await this.render()
  }

  render() {
    const rendered = Mustache.render(html)
    $('#content').append(view(rendered))
  }
}