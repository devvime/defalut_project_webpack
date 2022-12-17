import { app } from '../../environment/app'
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
    app.draw('content', html)
  }
}