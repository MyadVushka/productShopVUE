<script setup>
import { reactive } from 'vue'

const buttonStyle = reactive({
  1: false,
  2: false,
  3: false,
  4: false
})

console.log(buttonStyle[1])

const toggleButton = (id) => {
  for (const key in buttonStyle) {
    buttonStyle[key] = false
  }

  buttonStyle[id] = !buttonStyle[id]
}
</script>

<template>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Контакты</p>
    </div>
    <div class="topinfo">
      <h1 class="main-top-text">Контакты</h1>
      <div class="contacts__top">
        <div class="contacts__top-info">
          <img src="/public/home.svg" alt="percent&house" />
          <p>Бухгалтерия, склад</p>
          <b><u>+7 82410 92619</u></b>
        </div>
        <div class="contacts__top-info">
          <img src="/public/percent.svg" alt="percent&house" />
          <p>Вопросы по системе лояльности</p>
          <b><u>+7 908 716 33 97</u></b>
        </div>
      </div>
    </div>
    <div class="bottominfo">
      <h2><b>Наши магазины</b></h2>
      <div class="buttons">
        <button
          :id="buttonStyle[1]"
          :class="{ button: !buttonStyle[1], button_active: buttonStyle[1] }"
          @click="toggleButton(1)"
        >
          п. Щельяюр
        </button>
        <button
          :id="buttonStyle[2]"
          :class="{ button: !buttonStyle[2], button_active: buttonStyle[2] }"
          @click="toggleButton(2)"
        >
          д.Вертеп
        </button>
        <button
          :id="buttonStyle[3]"
          :class="{ button: !buttonStyle[3], button_active: buttonStyle[3] }"
          @click="toggleButton(3)"
        >
          с.Краснобор
        </button>
        <button
          :id="buttonStyle[4]"
          :class="{ button: !buttonStyle[4], button_active: buttonStyle[4] }"
          @click="toggleButton(4)"
        >
          д.Диюр
        </button>
      </div>
      <div class="adresses">
        <div class="address_block">
          <img src="/public/voskhod.svg" alt="" />
          <div class="">
            <img src="/public/home.svg" alt="" />
            <span>ул. Дорожная 10</span>
          </div>
          <div class="">
            <img src="/public/telephone.svg" alt="" />
            <span><u>+7 904 271 35 90</u></span>
          </div>
        </div>
        <div class="address_block">
          <img src="/public/parus.svg" alt="" />
          <div class="">
            <img src="/public/home.svg" alt="" />
            <span>ул. Советская 87</span>
          </div>
          <div class="">
            <img src="/public/telephone.svg" alt="" />
            <span><u>+7 82140 91330</u></span>
          </div>
        </div>
        <div class="address_block">
          <img src="/public/ryabinushka.svg" alt="" />
          <div class="">
            <img src="/public/home.svg" alt="" />
            <span>ул. Заводская 16</span>
          </div>
          <div class="">
            <img src="/public/telephone.svg" alt="" />
            <span><u>+7 82140 91101</u></span>
          </div>
        </div>
        <div class="address_block">
          <img src="/public/pelys.svg" alt="" />
          <div class="">
            <img src="/public/home.svg" alt="" />
            <span>ул. Рабочая 1</span>
          </div>
          <div class="">
            <img src="/public/telephone.svg" alt="" />
            <span><u>+7 82140 91300</u></span>
          </div>
        </div>
      </div>
      <img class="map" src="/public/image 12.png" alt="" />
    </div>
  </section>
</template>

<style scoped>
.map {
  width: 100%;
  margin: 80px 0;
}

.topinfo {
  margin: 60px 0 120px 0;
}


h2 {
  font-size: 36px;
  color: #414141;
}

.contacts__top {
  display: flex;
  align-items: baseline;
  gap: 80px;
  padding: 40px 0 120px 50px;
}

.contacts__top-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 240px;
}

.contacts__top-info img {
  position: absolute;
  left: -25%;
}

.contacts__top-info p {
  font-size: 20px;
  white-space: nowrap;
}

.buttons {
  margin-top: 30px;
  display: flex;
  gap: 24px;
}

.button {
  padding: 10px 15px;
  background-color: #f3f2f1;
  color: #606060;
  border-radius: 6px;
}
.button_active {
  padding: 10px 15px;
  background-color: #70c05b;
  color: white;
  border-radius: 6px;
}

.adresses {
  margin-top: 25px;
  display: flex;
  gap: 80px;
}

.address_block {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: baseline;
}

.address_block div {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
