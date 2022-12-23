import { blots } from 'blots'
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
    blots.draw('#header', html)
  }
}