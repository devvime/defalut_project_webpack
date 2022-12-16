import route from 'page'
import listCars from './components/listCars/listCars.js'

route('/', () => new listCars)

route()