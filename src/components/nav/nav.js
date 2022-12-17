import { app } from '../../environment/app'
import './nav.sass'
import html from './nav.html'

export default class Nav {

  constructor() {
    this.init()
  }

  init() {
    this.render()
  }

  render() {
    app.draw('header', html)
  }
}