import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import AboutCompany from './pages/AboutCompany.vue'
import ContactsPage from './pages/ContactsPage.vue'
import VacanciesPage from './pages/VacanciesPage.vue'
import FavouritesPage from './pages/FavouritesPage.vue'
import CartPage from './pages/CartPage.vue'
import DeliveryPage from './pages/DeliveryPage.vue'
import CataloguePage from './pages/CataloguePage.vue'
import ProductPage from './pages/ProductPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/about', component: AboutCompany },
  { path: '/contacts', component: ContactsPage },
  { path: '/vacancies', component: VacanciesPage },
  { path: '/favourites', component: FavouritesPage },
  { path: '/cart', component: CartPage },
  { path: '/delivery', component: DeliveryPage },
  { path: '/catalogue', component: CataloguePage },
  {path: '/product', components: ProductPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const vuetify = createVuetify({
  components,
  directives
})

createApp(App).use(vuetify).use(createPinia()).use(router).mount('#app')
