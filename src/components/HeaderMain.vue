<script setup>
import debounce from 'lodash.debounce'
import { computed, ref, watch } from 'vue'
import { useMainStore } from '../../stores/MainStore'
import RegistrationForm from './RegistrationForm.vue'

const dropDownFlag = ref(false)
const searchFlag = ref(false)

const store = useMainStore()

const registrationFormFlag = ref(false)

const currentCartElemenents = computed(() => store.getAddedProducts.length)
const currentSearchRes = computed(() => store.getFilteredArray)

const currentSearch = ref('')

let debounceHandler = debounce(function () {
  console.log(currentSearch.value)
  if (!currentSearch.value.length) {
    searchFlag.value = false
    store.setFilteredArrayClear()
  } else {
    searchFlag.value = true
    store.setFilteredArray(currentSearch.value)
  }
  console.log(currentSearchRes.value)
}, 1000)

watch(currentSearch, () => debounceHandler())
</script>

<template>
  <RegistrationForm v-if="registrationFormFlag" @on-close="registrationFormFlag = false" />
  <div class="general-wrapper">
    <header class="header">
      <div class="wrapper">
        <router-link to="/">
          <img src="/public/logo-main.svg" alt="" />
        </router-link>
        <div class="wrapper__button-input">
          <button class="wrapper__button">
            <img @click="dropDownFlag = !dropDownFlag" src="/public/menu.svg" alt="" />
            <router-link to="/catalogue"><p class="wrapper__button_text">Каталог</p></router-link>
          </button>
          <div class="wrapper__input">
            <input
              @click="searchFlag = true"
              :class="{
                'main-input': currentSearch.length >= 0,
                'main-input_active': searchFlag
              }"
              type="text"
              placeholder="Найти товар"
              v-model="currentSearch"
            />
            <img src="/public/lupa.svg" alt="" />
            <div v-if="searchFlag" class="wrapper__post-input-list">
              <ul class="search__list">
                <li class="search__list_item" v-for="item in currentSearchRes" :key="item.id">
                  <router-link :to="`/product/${item.id}`" @click="searchFlag = false">
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="wrapper__list">
          <li>
            <router-link class="wrapper__list_link" to="/favourites">
              <img src="/public/favourite-main.svg" alt="" />
              <p>Избранное</p>
            </router-link>
          </li>
          <li>
            <img src="/public/zakazy-header.svg" alt="" />
            <p>Заказы</p>
          </li>
          <li class="wrapper__list_cart">
            <router-link class="wrapper__list_link" to="/cart">
              <img src="/public/cart-header.svg" alt="" />
              <p>Корзина</p>
              <div class="wrapper__list_count" v-if="currentCartElemenents > 0">
                {{ currentCartElemenents }}
              </div>
            </router-link>
          </li>
        </ul>
        <div @click="registrationFormFlag = !registrationFormFlag" class="wrapper__profile">
          <div class="profile"></div>
          <p>Name Surname</p>
          <img src="/public/profile-dropdown.svg" alt="" />
        </div>
      </div>
    </header>
    <div v-if="dropDownFlag" class="drop-down-menu">
      <ul class="drop-down-menu__list">
        <li>Молоко, сыр, яйцо</li>
        <li>Хлеб</li>
        <li>Фрукты и овощи</li>
        <li>Замороженные продукты</li>
      </ul>
      <ul class="drop-down-menu__list">
        <li>Напитки</li>
        <li>Кондитерские изделия</li>
        <li>Чай, кофе</li>
      </ul>
      <ul class="drop-down-menu__list">
        <li>Бакалея</li>
        <li>Здоровое питание</li>
        <li>Зоотовары</li>
      </ul>
      <ul class="drop-down-menu__list">
        <li>Непродовольственные товары</li>
        <li>Детское питание</li>
        <li>Мясо, птица, колбаса</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.search__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.search__list li {
  align-items: baseline;
  cursor: pointer;
}

.wrapper__post-input-list {
  border: 1px solid #70c05b;
  border-top-color: white;
  top: 83%;
  z-index: 0;
  padding: 20px;
  position: absolute;
  background-color: white;
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.wrapper__button_text {
  color: white;
}

.wrapper__list_cart {
  position: relative;
}

.wrapper__list_count {
  background-color: #ff6633;
  font-size: 10px;
  color: white;
  position: absolute;
  padding: 4px;
  border-radius: 4px;
  right: 20%;
  top: -15%;
}

.general-wrapper {
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.header {
  width: 100%;
  padding: 20px 200px;
  box-shadow: 0px 3px 20px -5px rgba(0, 0, 0, 0.303);
  background-color: white;
  z-index: 200;
}

.wrapper__button-input {
  display: flex;
  align-items: center;
  gap: 25px;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-around;
}

.wrapper__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;
  background-color: #70c05b;
  color: white;
}

.wrapper__input {
  position: relative;
}

.main-input {
  outline: none;
  border: solid 1px #70c05b;
  z-index: 100;
  width: 500px;
  height: 40px;
  padding: 10px 35px 10px 20px;
  border-radius: 7px;
}

.main-input_active {
  border-bottom-color: white;
}

.wrapper__input img {
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
}

.wrapper__list {
  display: flex;
  gap: 20px;
}

.wrapper__list li {
  cursor: pointer;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

li img {
  width: 25px;
  height: 25px;
}

.wrapper__profile {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.profile {
  padding: 20px;
  background-color: grey;
  border-radius: 50%;
}

.drop-down-menu {
  padding: 40px 200px;
  background-color: rgba(255, 255, 255);
  z-index: 100;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 3px 20px -5px rgba(0, 0, 0, 0.67);
}

.drop-down-menu__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.drop-down-menu__list li {
  font-weight: bold;
  font-family: 'Rubik';
}

.drop-down-menu__list li:hover {
  color: #ff6633;
  cursor: pointer;
}

.wrapper__list_link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
</style>
