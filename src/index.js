import './components/default/theme/theme.sass'
import { blots } from 'blots'
import { Home } from './components/home/home.js'
import { PageNotFound } from './components/default/pageNotFound/pageNotFoundComponent.js'
import { Products } from './components/products/productsComponent.js'

blots.route('/', () => Home.component())
blots.route('/products', () => Products.component())
blots.route('*', () => PageNotFound.component())

blots.start()