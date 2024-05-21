import { blots, click } from 'blots'
import './products-element.sass'
import element from './products-element.html'

const strict = blots.createObservable()

export const Products = {
  strict: {
    products: [
      {
        id: new Date().getTime(),
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
    click('remove-product', Products.removeProduct)
  },
  addProduct() {
    let form = document.querySelector('#add-product')
    if (form.title.value === '' || form.price.value === '') return
    Products.strict.products.push({
      id: new Date().getTime(),
      title: form.title.value,
      price: form.price.value,
    })
    strict.save()
  },
  removeProduct() {
    const id = Number(this.getAttribute('id'))
    Products.strict.products = Products.strict.products.filter(p => p.id !== id)
    strict.save()
  },
  test() {
    console.log(Products.strict.products)
  }
}

strict.subscribe(Products.component)
