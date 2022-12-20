import { runtrax } from 'runtrax'
import './listCars.sass'
import html from './listCars.html'

export default class listCars {

  constructor() {
    this.init()
  }

  init() {
    this.getCars()
    this.render()
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
        },
        {
          Model: 'Margareth Hath',
          Color: 'Cinza',
          Engine: '1.0 8v Fire'
        }
      ]
    }
  }

  render() {
    runtrax.draw('#content', html, this.carsData)
  }
}