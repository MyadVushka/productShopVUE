<script setup>
import { ref } from 'vue'
import CatalogueCard from '../components/CatalogueCard.vue'

const imgURLS = [
  {
    title: 'Молоко, сыр, яйцо',
    imgUrl: '/public/catalogueIMG/milk.png',
    id: 0
  },
  {
    title: 'Хлеб',
    imgUrl: '/public/catalogueIMG/bread.png',
    id: 1
  },
  {
    title: 'Фрукты и овощи',
    imgUrl: '/public/catalogueIMG/fruits.png',
    id: 2
  },
  {
    title: 'Замороженные продукты',
    imgUrl: '/public/catalogueIMG/frozen-fruits.png',
    id: 3
  },
  {
    title: 'Напитки',
    imgUrl: '/public/catalogueIMG/drinks.png',
    id: 4
  },
  {
    title: 'Кондитерские изделия',
    imgUrl: '/public/catalogueIMG/bakery.png',
    id: 5
  },
  {
    title: 'Чай, кофе',
    imgUrl: '/public/catalogueIMG/coffee&tea.png',
    id: 6
  },
  {
    title: 'Бакалея',
    imgUrl: '/public/catalogueIMG/balackley.png',
    id: 7
  },
  {
    title: 'Здорове питание',
    imgUrl: '/public/catalogueIMG/sportpit.png',
    id: 8
  },
  {
    title: 'Зоотовары',
    imgUrl: '/public/catalogueIMG/zoogoods.png',
    id: 9
  },
  {
    title: 'Детское питание',
    imgUrl: '/public/catalogueIMG/childgoods.png',
    id: 10
  },
  {
    title: 'Мясо, птица, колбаса',
    imgUrl: '/public/catalogueIMG/meat.png',
    id: 11
  },
  {
    title: 'Непродовольственные товары',
    imgUrl: '/public/catalogueIMG/non-food products.png',
    id: 12
  }
]

const expression = ref(false)
</script>

<template>
  <v-snackbar class="snackbar" v-model="expression" color="#70c05b" location="left bottom">
    <span class="snackbar text">In this project there are no catalogue</span>
    <v-btn class="snackbar button" @click.prevent="expression = false" variant="plain">Close</v-btn>
  </v-snackbar>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Каталог</p>
    </div>
    <h1 class="main-top-text">Каталог</h1>
    <div class="catalogue-wrapper">
      <CatalogueCard
        v-for="item in imgURLS"
        :key="item.id"
        :title="item.title"
        :imgUrl="item.imgUrl"
        :id="item.id"
        @click="expression = true"
      />
    </div>
  </section>
</template>

<style scoped>
.catalogue-wrapper {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
