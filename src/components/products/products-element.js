import { blots, click } from 'blots'
import './products-element.sass'
import element from './products-element.html'

const strict = blots.createObservable()

export const Products = {
  strict: {
    products: [
      {
        title: 'Notebook',
        price: 3599.99
      }
    ]
  },
  component() {
    blots.draw('#content', element, Products.strict)
    Products.actions()
  },
  actions() {
    click('add-product', Products.addProduct)
  },
  addProduct() {
    let form = document.querySelector('#add-product')
    if (form.title.value === '') return
    if (form.price.value === '') return
    Products.strict.products.push({
      title: form.title.value,
      price: form.price.value,
    })
    strict.save()
  }
}

strict.subscribe(Products.component)