<script setup>
import CardItem from './CardItem.vue'
import { useMainStore } from '../../stores/MainStore'
import { computed } from 'vue'

const store = useMainStore()

const arrayOfProducts = computed(() => store.getArr)
const arrayOfDiscountedProducts = computed(() => store.getDiscountedArr)

const onFavouriteToggle = (id) => {
  store.setFavouriteToggle(id)
}

const onAddToggle = (id) => {
  store.setAddedProducts(id);
  
}

</script>

<template>
  <section>
    <div class="wrapper__card">
      <div class="wrapper__text">
        <h1>Акции</h1>
        <div class="wrapper__text">
          <p>Все акции</p>
          <img src="/public/toPageList.svg" alt="" />
        </div>
      </div>
      <div class="card-list">
        <CardItem
          v-for="item in arrayOfDiscountedProducts"
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
    <div class="wrapper__card">
      <div class="wrapper__text">
        <h1>Новинки</h1>
        <div class="wrapper__text">
          <p>Все новинки</p>
          <img src="/public/toPageList.svg" alt="" />
        </div>
      </div>
      <div class="card-list">
        <CardItem
          v-for="item in arrayOfProducts.filter((item) => item.hasDiscount === false).slice(0, 4)"
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
    <div class="wrapper__card">
      <div class="wrapper__text">
        <h1>Покупали раньше</h1>
        <div class="wrapper__text">
          <p>Все покупки</p>
          <img src="/public/toPageList.svg" alt="" />
        </div>
      </div>
      <div class="card-list">
        <CardItem
          v-for="item in arrayOfProducts.filter((item) => item.hasDiscount === false).slice(3, 8)"
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
h1 {
  margin: 40px 0;
}

.wrapper__card {
  margin: 100px 0;
}

.wrapper__card:last-child {
  margin-bottom: 0;
}

.wrapper__text {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 15px;
}

.card-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;
}
</style>
