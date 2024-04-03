<script setup>
import { onMounted, ref, computed, onUpdated } from 'vue'
import { useMainStore } from '../../stores/MainStore'

const store = useMainStore()
const props = defineProps({
  id: String
})

const filteredProducts = computed(() => store.getFilteredArray)
const product = ref([
  {
    title: '',
    price: 0,
    id: 0,
    imgURL: ''
  }
])

onMounted(() => {
  console.log(props.id)
  product.value = filteredProducts.value.find((el) => el.id === Number(props.id))
})

onUpdated(() => {
  console.log(props.id)
  product.value = filteredProducts.value.find((el) => el.id === Number(props.id))
})
</script>

<template>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Каталог</p>
      <img src="/public/toPageList.svg" alt="" />
      <p>{{ product.title }}</p>
    </div>
    <div class="main-block">
      <h1>{{ product.title }}</h1>
      <div class="main-block-upper">
        <p>арт. 371431</p>
        <div class="main-block-upper__refs">
          <img src="/public/shareProduct.svg" alt="share" />
          <p>Поделиться</p>
        </div>
        <div class="main-block-upper__refs">
          <img src="/public/toFavourite.svg" alt="" />
          <p>Избранное</p>
        </div>
      </div>
      <div class="main-block-upper__info">
        <img class="product-pic" :src="product.imgURL" alt="" />
        <div class="main-block-upper-right-block">
          <div class="main-block-upper-right-block__price">
            <h2>{{ product.cost }} ₽</h2>
            <span>Обычная цена</span>
          </div>
          <div class="main-button">
            <img src="/public/cart-header.svg" alt="" />
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="secondary-block"></div>
  </section>
</template>

<style scoped>
.main-button {
  position: relative;
  padding: 15px;
}

.main-button button {
  width: 100%;
  background-color: #ff6633;
  padding: 30px;
  border-radius: 6px;
  color: white;
}

.main-button img {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}

.main-block-upper-right-block__price {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;
}

.main-block-upper-right-block__price span {
  color: #bfbfbf;
}

.main-block-upper-right-block {
  display: flex;
  flex-direction: column;
}

.main-block-upper__info {
  display: flex;
  align-items: center;
  gap: 40px;
}

.product-pic {
  width: 470px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.main-block {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main-block-upper,
.main-block-upper__refs {
  display: flex;
  align-items: center;
  gap: 30px;
}

.main-block-upper__refs {
  gap: 10px;
}
</style>
