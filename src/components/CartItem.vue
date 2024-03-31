<script setup>

const props = defineProps({
  id: Number,
  title: String,
  cost: Number,
  imgUrl: String,
  isFavourite: Boolean,
  isAdded: Boolean,
  hasDiscount: Boolean,
  chosenOnCart: Boolean,
  currentAmount: Number
})

const emits = defineEmits(['currentSum', 'chosenElement', 'currentAmount'])

const onDecreaseAmount = () => {
  if (props.currentAmount === 1) {
    return
  }
  emits('currentAmount', '-', props.id)
}

const onIncreaseAmount = () => {
  emits('currentAmount', '+', props.id)
}

const onChoseHandler = () => {
  emits('chosenElement', props.id)
}
</script>

<template>
  <div class="wrapper">
    <div class="main-image-text">
      <div class="main-image-block">
        <img class="main-image" :src="props.imgUrl" alt="" />
        <div
          @click="onChoseHandler"
          :class="{
            'main-checkbox': !props.chosenOnCart,
            'main-checkbox_active': props.chosenOnCart
          }"
        >
          <img src="/public/Shape (Stroke).svg" alt="" />
        </div>
      </div>
      <div class="main-text">
        <p>{{ props.title }}</p>
        <div class="main-text__cost">
          <b>{{ props.cost }} ₽</b>
          <span>за шт.</span>
        </div>
      </div>
    </div>
    <div class="button-genera-amount">
      <div class="main-button">
        <p @click="onDecreaseAmount" class="main-button_change">-</p>
        <p>{{ props.currentAmount }}</p>
        <p @click="onIncreaseAmount" class="main-button_change">+</p>
      </div>
      <p class="main-price">{{ (props.currentAmount * props.cost).toFixed(2) }} ₽</p>
    </div>
  </div>
</template>

<style scoped>
.main-image-block {
  display: flex;
  position: relative;
}

.main-checkbox {
  position: absolute;
  top: -5%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f3f2f1;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 7px;
  cursor: pointer;
}

.main-checkbox_active {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5%;
  left: 5%;
  border: 2px solid #f3f2f1;
  width: 25px;
  height: 25px;
  background-color: #70c05b;
  border-radius: 7px;
  cursor: pointer;
}

.button-genera-amount {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 300px;
}

.main-image-text {
  display: flex;
  align-items: center;
  gap: 20px;
}

.main-price {
  font-weight: bold;
  font-size: 24px;
  color: #414141;
}

.wrapper {
  display: flex;
  background-color: white;
  padding: 25px 10px;
  border-radius: 20px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  width: 1000px;
}

.main-image {
  width: 140px;
  padding: 10px;
  background-color: white;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 6px;
}

.main-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-text__cost {
  display: flex;
  align-items: center;
  gap: 6px;
}

.main-button {
  display: flex;
  gap: 25px;
  font-size: 20px;
  align-items: center;
  padding: 20px 20px;
  background-color: #70c05b;
  color: white;
  border-radius: 7px;
}

.main-button_change {
  cursor: pointer;
  padding: 3px;
}
</style>
