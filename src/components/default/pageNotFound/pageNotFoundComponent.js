import { blots } from 'blots'
import './pageNotFoundComponent.sass'
import html from './pageNotFoundComponent.html'

const strict = blots.createObservable()

export const PageNotFound = {
  component() {
    blots.draw('#content', html)
  },
  actions() {
    // functions
  }
}

strict.subscribe(PageNotFound.component)