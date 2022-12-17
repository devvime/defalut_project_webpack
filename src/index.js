import { app } from "./environment/app";
import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import listCars from './components/listCars/listCars.js'

app.render(Nav)

app.route('/', Home)
app.route('/cars', listCars)

app.run()