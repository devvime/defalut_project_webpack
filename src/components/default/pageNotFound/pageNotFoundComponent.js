import { runtrax } from 'runtrax'
import './pageNotFoundComponent.sass'
import html from './pageNotFoundComponent.html'

export default class pageNotFoundComponent {

    constructor() {
        this.init()
    }

    init() {
        this.render()
    }

    render() {
        runtrax.draw('#content', html)
    }
}