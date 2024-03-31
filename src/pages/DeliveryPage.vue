<script setup>
import { computed } from 'vue'
import { useMainStore } from '../../stores/MainStore'
import CartRightSide from '@/components/CartRightSide.vue'

const store = useMainStore()

const currentAmount = computed(() => store.getGeneralAmount)

const arrayOfSelectedProducts = computed(() => store.getAddedProducts)
</script>

<template>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Корзина</p>
    </div>
    <div class="cart-title">
      <h1 class="main-top-text">Доставка</h1>
      <div class="cart-title-count">
        {{ arrayOfSelectedProducts.length }}
      </div>
    </div>
    <div class="main-wrapper">
      <div class="left-side">
        <div class="left-side top">
          <h2>Куда</h2>
          <div class="left-side_top__inputs">
            <div class="left-side_top__block">
              <p>Населенный пункт</p>
              <input type="text" />
            </div>
            <div class="left-side_top__block">
              <p>Улица</p>
              <input type="text" />
            </div>
            <div class="left-side_top__block">
              <p>Дом</p>
              <input type="text" />
            </div>
            <div class="left-side_top__block">
              <p>Квартира</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div class="left-side middle">
          <h2>Когда</h2>
          <div class="left-side_top__inputs">
            <div class="left-side_top__block">
              <p>Дата</p>
              <input type="text" />
            </div>
            <div class="left-side_top__block">
              <p>Время</p>
              <div class="left-side_top__time">
                <button class="left-side_top__button">8:00 - 14:00</button>
                <button class="left-side_top__button">14:00 - 18:00</button>
                <button class="left-side_top__button">18:00 -20:00</button>
                <button class="left-side_top__button">20:00 - 22:00</button>
              </div>
            </div>
          </div>
        </div>
        <div class="left-side bottom">
          <h2>Вход</h2>
          <div class="bottom-block">
            <input type="text" />
            <button>Поулчить код</button>
            <p>Войти по почте</p>
          </div>
        </div>
      </div>
      <div class="right-side">
        <CartRightSide
          :general-amount="currentAmount"
          :current-amount="store.getAddedProducts.length"
        />
        <div class="right-side__buttons">
          <button type="submit">Оплатить на сайте</button>
          <button type="submit">Оплатить при получении</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.right-side {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.right-side__buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.right-side__buttons button:first-child {
  background-color: #ff6633;
  color: white;
  border: none;
}

.right-side__buttons button:last-child {
  padding: 8px 25px;
  background-color: #70c05b;
  color: white;
  font-size: 14px;
}

.main-wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
}

.bottom-block {
  display: flex;
  align-items: center;
  gap: 50px;
}

.bottom-block input {
  outline: none;
  padding: 15px 20px;
  border: solid 1px #8f8f8f3c;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  font-size: 18px;
}

.bottom-block button {
  background-color: #ff6633;
  color: white;
  border: none;
  padding: 15px 40px;
}

.bottom-block p {
  cursor: pointer;
  color: #70c05b;
}

h2 {
  font-size: 36px;
  font-weight: bold;
  color: #414141;
}

.left-side_top__time {
  display: flex;
  gap: 30px;
}

.left-side_top__button {
  border: none;
  padding-left: 40px;
  padding-right: 40px;
}

.cart-title {
  position: relative;
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.left-side_top__block {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
}

.left-side_top__block p {
  color: #8f8f8f;
}
.left-side_top__block input,
button {
  outline: none;
  padding: 15px 20px;
  border: solid 1px #8f8f8f3c;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 4px;
  font-size: 18px;
}

.left-side_top__inputs {
  display: flex;
  gap: 50px;
}

.cart-title-count {
  position: absolute;
  top: -20%;
  right: 77%;
  padding: 10px;
  background-color: #ff6633;
  color: white;
  border-radius: 6px;
}
</style>
