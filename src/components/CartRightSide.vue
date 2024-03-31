<script setup>
const props = defineProps({
  generalAmount: Number,
  currentAmount: Number,
})
</script>

<template>
  <div class="right-wrapper">
    <div class="right-block__summary">
      <hr />
      <div class="right-block__text top">
        <p>{{ props.currentAmount }} товара</p>
        <p class="right-block__text_cost">{{ props.generalAmount.toFixed(2) }} ₽</p>
      </div>
      <div class="right-block__text bottom">
        <p>Скидка</p>
        <p></p>
      </div>
      <hr />
      <div class="right-block__text total">
        <p>Итог</p>
        <h2 class="right-block__text_cost">
          <b>{{ props.generalAmount.toFixed(2) }} ₽</b>
        </h2>
      </div>
    </div>
    <div class="right-block__bonus">
      <img src="/public/smile.svg" alt="" />
      <p>Вы получаете <b>100 бонусов</b></p>
    </div>
  </div>
</template>

<style scoped>
.right-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.right-block__text_cost {
  color: #414141;
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
