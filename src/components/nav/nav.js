import { runtrax } from 'runtrax'
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
    runtrax.draw('#header', html)
  }
}