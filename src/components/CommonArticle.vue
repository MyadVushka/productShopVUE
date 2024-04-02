<script setup>
import { ref } from 'vue'
const expression = ref(false)
</script>

<template>
  <v-snackbar class="snackbar" v-model="expression" color="#70c05b" location="left bottom">
    <span class="snackbar text">In this project there are no articles =)</span>
    <v-btn class="snackbar button" @click.prevent="expression = false" variant="plain">Close</v-btn>
  </v-snackbar>
  <div class="generalWrapper">
    <img class="article__img" src="/public/image 5.png" alt="" />
    <div class="article__text">
      <span>05.03.2021</span>
      <h2>Режим использования масок и перчаток на территории магазинов</h2>
      <p>
        Подробная информация о режимах использования масок и перчаток на территории магазинов
        "ЛЕНТА". Информация обновляется каждый будний день.
      </p>
      <button @click="expression = true" class="article__button">Подробнее</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: #414141;
  font-size: 18px;
}

img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

p {
  color: #414141;
  font-size: 14px;
}

span {
  color: #8f8f8f;
  font-size: 14px;
}

.article__text {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h2,
p {
  line-height: 1.6;
}

.generalWrapper {
  border-radius: 10px;
  margin-top: 30px;
  background-color: white;
  display: flex;
  width: 370px;
  flex-direction: column;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.article__img {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article__button {
  background-color: #e5ffde;
  color: #70c05b;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 18px;
  width: 150px;
}

.article__button:hover {
  background-color: #70c05b;
  color: white;
}
</style>
