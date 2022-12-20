import { runtrax } from 'runtrax'
import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import listCars from './components/listCars/listCars.js'

runtrax.render(Nav)

runtrax.route('/', Home)
runtrax.route('/cars', listCars)

runtrax.run()