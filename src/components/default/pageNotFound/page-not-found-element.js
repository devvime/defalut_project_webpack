import { blots } from 'blots'
import './page-not-found-element.sass'
import element from './page-not-found-element.html'

const strict = blots.createObservable()

export const PageNotFound = {
  component() {
    blots.draw('#content', element)
    PageNotFound.actions()
  },
  actions() {
    // functions
  }
}

strict.subscribe(PageNotFound.component)