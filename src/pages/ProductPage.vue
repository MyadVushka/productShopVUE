<script setup>
import { onMounted, ref, computed, onUpdated } from 'vue'
import CardItem from '@/components/CardItem.vue'
import { useMainStore } from '../../stores/MainStore'

const store = useMainStore()
const props = defineProps({
  id: String
})

const filteredProducts = computed(() => store.getFilteredArray)
const generalArr = computed(() => store.getArr)

const product = ref([
  {
    title: '',
    price: 0,
    id: 0,
    imgURL: '',
    hasDiscount: false
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
    <div class="main-info-wrapper">
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
          <div class="discounted-block">
            <img class="product-pic" :src="product.imgURL" alt="" />
            <div v-if="product.hasDiscount" class="">
              <span>-50%</span>
            </div>
          </div>
          <div class="main-block-upper-right-block">
            <div class="product-cost">
              <div v-if="product.hasDiscount" class="main-block-upper-right-block__discount">
                <h2>{{ (product.cost * 0.5).toFixed(2) }} ₽</h2>
                <span>С картой северяночки</span>
              </div>
              <div class="main-block-upper-right-block__price">
                <h2>{{ product.cost }} ₽</h2>
                <span>Обычная цена</span>
              </div>
            </div>
            <div class="main-button">
              <img src="/public/cart-product.svg" alt="" />
              <button @click="store.setAddedProducts(product.id)">
                {{ product.isAdded ? 'Добавлено' : 'В корзину' }}
              </button>
            </div>
            <div class="main-bonus">
              <img src="/public/smile.svg" alt="" />
              <p>Вы получаете <b>10 бонусов</b></p>
            </div>
            <div class="main-info">
              <div class="main-info-block odd">
                <p>Бренд</p>
                <p><b>Упаковка</b></p>
              </div>
              <div class="main-info-block even">
                <p>Страна производителя</p>
                <p><b>Россия</b></p>
              </div>
              <div class="main-info-block odd">
                <p>Упаковка</p>
                <p><b>180 г</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-block">
        <h1>С этим товаром покупают</h1>
        <div class="secondary-block__products">
          <CardItem
            v-for="item in generalArr.slice(0, 4)"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :cost="item.cost"
            :imgUrl="item.imgURL"
            :isFavourite="item.isFavourite"
            :isAdded="item.isAdded"
            :hasDiscount="item.hasDiscount"
            @add-to-cart="(id) => store.setAddedProducts(id)"
            @add-to-favourite="(id) => store.setFavouriteToggle(id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.secondary-block__products {
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}

.main-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.main-info {
  display: flex;
  flex-direction: column;
}

.main-info-block {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
}

.odd {
  background-color: #f3f2f1;
}

.main-bonus {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #70c05b;
}

.product-cost {
  display: flex;
  justify-content: space-between;
}

.product-cost div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.discounted-block {
  position: relative;
}

.discounted-block div {
  position: absolute;
  top: 5%;
  right: 10%;
  color: white;
  background-color: #ff6633;
  padding: 7px;
  border-radius: 6px;
}

.main-button {
  position: relative;
}

.main-button button {
  width: 100%;
  background-color: #ff6633;
  padding: 20px;
  border-radius: 6px;
  font-size: 24px;
  padding-left: 50px;
  color: white;
}

.main-button img {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}

.main-block-upper-right-block__price span {
  color: #bfbfbf;
}

.main-block-upper-right-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
}

.main-block-upper__info {
  display: flex;
  gap: 60px;
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
