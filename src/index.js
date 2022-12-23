import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './components/default/theme/theme.sass'
import { blots } from 'blots'
import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import listCars from './components/listCars/listCars.js'
import pageNotFoundComponent from './components/default/pageNotFound/pageNotFoundComponent.js'

blots.render(Nav)

blots.route('/', Home)
blots.route('/cars', listCars)
blots.route('*', pageNotFoundComponent)

blots.run()