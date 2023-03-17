import './components/default/theme/theme.sass'
import { blots } from 'blots'
import Home from './components/home/home.js'
import pageNotFoundComponent from './components/default/pageNotFound/pageNotFoundComponent.js'

blots.route('/', () => new Home)
blots.route('*', () => new pageNotFoundComponent)

blots.start()