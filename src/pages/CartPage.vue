<script setup>
import { ref, computed } from 'vue'
import CartItem from '@/components/CartItem.vue'
import CartRightSide from '@/components/CartRightSide.vue'
import { useMainStore } from '../../stores/MainStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useMainStore()
const arrayOfSelectedProducts = computed(() => store.getAddedProducts)
const arrayOfChosenProducts = computed(() => store.getChosenProducts)
const selectAllState = ref('+')
const generalAmount = ref(
  arrayOfSelectedProducts.value.reduce((sum, el) => {
    return sum + el.cost
  }, 0),
  0
)

const onSelectAllHandler = () => {
  if (selectAllState.value === '+') {
    selectAllState.value = '-'
    arrayOfSelectedProducts.value.forEach((el) => {
      el.chosenOnCart = true
    })
  } else {
    selectAllState.value = '+'
    arrayOfSelectedProducts.value.forEach((el) => {
      el.chosenOnCart = false
    })
  }
}

const onDeleteAllHandler = () => {
  arrayOfChosenProducts.value.forEach((el) => {
    el.isAdded = false
    el.chosenOnCart = false
  })
  currentGeneralSum()
}

const onChangeAmount = (data, id) => {
  for (const item in arrayOfSelectedProducts.value) {
    if (arrayOfSelectedProducts.value[item].id === id) {
      if (data === '+') {
        arrayOfSelectedProducts.value[item].currentAmount++
      } else {
        arrayOfSelectedProducts.value[item].currentAmount--
      }
    }
  }
  currentGeneralSum()
}

const currentGeneralSum = () => {
  generalAmount.value = arrayOfSelectedProducts.value.reduce((sum, el) => {
    return sum + el.cost * el.currentAmount
  }, 0)
  store.setGeneralAmount(generalAmount.value)
}

const toDeliveryPage = () => {
  router.push({ path: '/delivery' })
}
</script>

<template>
  <section class="wrapper__info">
    <div class="cart-title">
      <h1 class="main-top-text">Корзина</h1>
      <div class="cart-title-count">{{ arrayOfSelectedProducts.length }}</div>
    </div>
    <div class="main-block">
      <div class="left-block">
        <div class="upper-block">
          <div class="upper-block__select-all">
            <button @click="onSelectAllHandler" class="select-all-button">
              {{ selectAllState }}
            </button>
            <p class="upper-block__select-all_text">Выделить всё</p>
          </div>
          <p @click="onDeleteAllHandler" class="upper-block__delete">Удалить выбранные</p>
        </div>
        <div class="cart-list">
          <CartItem
            v-for="item in arrayOfSelectedProducts"
            class="cardItem"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :cost="item.cost"
            :imgUrl="item.imgURL"
            :isFavourite="item.isFavourite"
            :isAdded="item.isAdded"
            :hasDiscount="item.hasDiscount"
            :chosenOnCart="item.chosenOnCart"
            :currentAmount="item.currentAmount"
            @currentSum="(cost) => (generalAmount += cost)"
            @chosenElement="(id) => store.setChosenToggle(id)"
            @currentAmount="(data, id) => onChangeAmount(data, id)"
          />
        </div>
      </div>
      <div class="right-block">
        <CartRightSide
          :generalAmount="generalAmount"
          :currentAmount="arrayOfSelectedProducts.length"
        />
        <div class="button-general">
          <div v-if="generalAmount < 1000" class="warning-block">
            <span>Минимальная сумма заказа 1000р</span>
          </div>
          <button
            :disabled="generalAmount < 1000"
            :class="{
              'right-block__button_disabled': generalAmount < 1000,
              'right-block__button': generalAmount >= 1000
            }"
            @click="toDeliveryPage"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.right-block__text_cost {
  color: #414141;
}

.left-block {
  position: relative;
  display: flex;
  flex-direction: column;
}

.button-general {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.warning-block {
  position: absolute;
  top: -75%;
  background-color: #d80000;
  color: white;
  padding: 3px 8px;
  font-size: 13px;
  width: 230px;
  border-radius: 4px;
}

.right-block__button_disabled {
  background-color: #fcd5ba;
  color: #ff6633;
  padding: 15px 50px;
  border-radius: 4px;
  font-size: 20px;
}

.right-block__button {
  padding: 15px 50px;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  background-color: #ff6633;
}

.right-block__bonus {
  color: #70c05b;
  display: flex;
  gap: 15px;
}

.right-block__bonus_figure {
  padding: 5px 15px;
  background-color: #70c05b;
  border-radius: 1px;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
}

.right-block__summary {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

hr {
  border: 2px solid #f3f2f1;
}

.right-block {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.right-block__text {
  color: #8f8f8f;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-block {
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
}

.cart-title {
  position: relative;
}

.cart-title-count {
  position: absolute;
  top: 0;
  right: 80%;
  padding: 10px;
  background-color: #ff6633;
  color: white;
  border-radius: 6px;
}

.cart-list {
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  gap: 30px;
}

.select-all-button {
  background-color: #70c05b;
  width: 30px;
  padding-bottom: 2px;
  height: 30px;
  font-size: 22px;
  color: white;
  border-radius: 5px;
}

.upper-block__select-all,
.upper-block {
  display: flex;
  align-items: center;
  gap: 15px;
}
.upper-block {
  gap: 60px;
  text-wrap: nowrap;
}
.upper-block__select-all_text {
  color: #606060;
  cursor: pointer;
}

.upper-block__delete {
  color: #ff6633;
  cursor: pointer;
}
</style>
