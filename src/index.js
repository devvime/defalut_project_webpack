import './components/default/theme/theme.sass'
import { blots } from 'blots'
import { Home } from './components/home/home-element.js'
import { PageNotFound } from './components/default/pageNotFound/page-not-found-element.js'
import { Products } from './components/products/products-element.js'

blots.route('/', () => Home.component())
blots.route('/products', () => Products.component())
blots.route('*', () => PageNotFound.component())

blots.start()