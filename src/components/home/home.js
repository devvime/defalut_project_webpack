import { runtrax } from 'runtrax'
import './home.sass'
import html from './home.html'

export default class Home {

  constructor() {
    this.init()
  }

  init() {
    this.render()
  }

  render() {
    runtrax.draw('#content', html)
  }
}