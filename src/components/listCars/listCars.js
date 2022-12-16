import $ from 'jquery'
import './listCars.sass'
import { view } from '../../environment/view.js'
import html from './listCars.html'
import Mustache from 'mustache'

export default class listCars {

  constructor() {
    this.init()
  }

  async init() {
    await this.getCars()
    await this.render()
  }

  getCars() {
    this.carsData = {
      cars: [
        {
          Model: 'Gol',
          Color: 'Prata',
          Engine: '1.0 16v Power'
        },
        {
          Model: 'Polo',
          Color: 'Cinza',
          Engine: '1.8 8v AP'
        },
        {
          Model: 'Corsa Classic',
          Color: 'Cinza',
          Engine: '1.0 8v'
        }
      ]
    }
  }

  render() {
    const rendered = Mustache.render(html, this.carsData)
    $('#content').append(view(rendered))
  }
}