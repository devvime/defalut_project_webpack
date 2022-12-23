import { blots } from 'blots'
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
          model: 'Gol',
          color: 'Cinza',
          engine: '1.0 16v Power',
          img: 'https://onlycars.com.br/wp-content/uploads/2020/08/gol-g3-rebaixado-fotos.jpg'
        },
        {
          model: 'Corsa',
          color: 'Vermelho',
          engine: '1.0 8v VHC',
          img: 'https://i.ytimg.com/vi/dnrRDR_yzQQ/maxresdefault.jpg'
        },
        {
          model: 'Palio',
          color: 'Vinho',
          engine: '1.0 8v Fire',
          img: 'https://onlycars.com.br/wp-content/uploads/2021/07/palio-rebaixado-roxo.jpg'
        },
        {
          model: 'Gol GL',
          color: 'Branco',
          engine: '1.8 8v AP',
          img: 'http://3.bp.blogspot.com/-YErz-80Of4U/U7xWRat5mlI/AAAAAAAATqE/wXyv014PKKI/s1600/gol-quadrado-rebaixado-orbital.jpg'
        },
      ]
    }
  }

  render() {
    blots.draw('#content', html, this.carsData)
  }
}