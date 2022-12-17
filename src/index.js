import route from 'page'
import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import listCars from './components/listCars/listCars.js'

new Nav()

route('/', () => new Home)
route('/cars', () => new listCars)

route()