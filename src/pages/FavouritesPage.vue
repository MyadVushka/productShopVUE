<script setup>
import CardItem from '@/components/CardItem.vue'
import { computed } from 'vue'
import { useMainStore } from '../../stores/MainStore'

const store = useMainStore()

const arrayOfFavouriteProducts = computed(() => store.getFavouriteArr)

const onFavouriteToggle = (id) => {
  store.setFavouriteToggle(id)
}
</script>

<template>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Избранное</p>
    </div>
    <h1 class="main-top-text">Избранное</h1>
    <div class="main__content">
      <div class="left-side">
        <button>Фильтр</button>
        <div class="left-side__form">
          <div class="left-side__form-top">
            <p>Цена</p>
            <button>Очистить</button>
          </div>
          <form action="">
            <div class="form__labels">
              <input type="number" value="0" />
              <div class="form__labels_line"></div>
              <input type="number" value="100" />
            </div>
            <input class="range-input" type="range" min="1" max="100" />
          </form>
        </div>
        <div class="chechbox-input">
          <input type="checkbox" />
          <span>В наличии</span>
        </div>
        <button class="submit-button">Применить</button>
      </div>
      <div class="favourite-cards">
        <CardItem
          v-for="item in arrayOfFavouriteProducts.slice(0, 6)"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :cost="item.cost"
          :imgUrl="item.imgURL"
          :isFavourite="item.isFavourite"
          :isAdded="item.isAdded"
          :hasDiscount="item.hasDiscount"
          @add-to-favourite="(id) => onFavouriteToggle(id)"
          @add-to-cart="(id) => onAddToggle(id)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.main__content {
  padding-bottom: 80px;
  display: inline-flex;
  height: 70svh;
}

.favourite-cards {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 60px;
}

.chechbox-input {
  display: flex;
  align-items: center;
  gap: 20px;
}

button:first-child {
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-radius: 6px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.submit-button {
  font-size: 16px;
  background-color: #ff6633;
  color: white;
  padding: 10px;
  border-radius: 6px;
}

.left-side {
  display: flex;
  min-width: 350px;
  max-width: 350px;
  flex-direction: column;
  gap: 40px;
  margin-right: 200px;
}

.left-side__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left-side__form-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-side__form-top p {
  font-weight: 600;
}

.left-side__form-top button {
  padding: 8px;
  border-radius: 3px;
}

.form__labels {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}

.form__labels_line {
  border: 1px solid black;
  width: 15px;
}

.range-input {
  -webkit-appearance: none;
  height: 8px;
  background-color: #f3f2f1;
  border-radius: 10px;
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 30px;
  width: 30px;
  background-color: #70c05b;
  border-radius: 50%;
  border-color: white;
}

.form__labels input {
  background-color: white;
  padding: 10px 8px;
  border: solid 1px grey;
  border-radius: 6px;
  font-size: 20px;
  -moz-appearance: none;
}

.form__labels input[type='number']::-webkit-outer-spin-button,
.form__labels input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.form__labels input::placeholder {
  color: black;
}

form input {
  width: 100%;
}
</style>
