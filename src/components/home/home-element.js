import { blots } from 'blots'
import Mustache from 'mustache'
import $ from 'jquery'
import './home-element.sass'
import logo from '../../images/raven.png'
import element from './home-element.html'
import drop from './drops-element.html'

const strict = blots.createObservable()

export const Home = {
  strict: {
    logo
  },
  component() {
    blots.draw('#content', element, Home.strict)
    Home.actions()
  },
  actions() {
    Home.rain()
  },
  rain() {
    $('.rain').empty()
    let increment = 0
    let drops = ""
    let backDrops = ""    
    while (increment < 100) {
      let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1))
      let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2))
      increment += randoFiver
      const values = {
        increment,
        randoFiver: (randoFiver + randoFiver - 1 + 100),
        randoHundo
      }
      drops += Mustache.render(drop, {...values, direction: 'left'})
      backDrops += Mustache.render(drop, {...values, direction: 'right'})
    }        
    $('.rain.front-row').append(drops)
    $('.rain.back-row').append(backDrops)
  }
}

strict.subscribe(Home.component)