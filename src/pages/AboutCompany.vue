<script setup></script>

<template>
  <div class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">О компании</p>
    </div>
    <div class="about__top">
      <div class="about__top-text">
        <h1 class="main-top-text">О компании</h1>
        <h2>
          Мы непрерывно развиваемся <br />
          и работаем над совершенствованием сервиса, <br />
          заботимся о наших клиентах, <br />
          стремимся к лучшему будущему.
        </h2>
      </div>
      <img src="/public/AboutMainImg.svg" alt="" />
    </div>
    <div class="middle__block-main">
      <div class="middle__block">
        <img src="/public/check.svg" alt="" />
        <p>Мы занимаемся розничной торговлей</p>
        <b>Более 20 лет.</b>
      </div>
      <div class="middle__block">
        <img src="/public/check.svg" alt="" />
        <p>Основная миссия компании</p>
        <b>Максимальное качество товаров и услуг по доступной цене.</b>
      </div>
      <div class="middle__block">
        <img src="/public/check.svg" alt="" />
        <p>Отличительная черта нашей сети</p>
        <b>Здоровая и полезная продукция местного производства в наших магазинах.</b>
      </div>
    </div>
    <div class="bottom__block">
      <img src="/public/logoAbout.svg" alt="" />
      <div class="">
        <img src="/public/AboutCloud.svg" alt="" />
        <h2>Спасибо за то, что вы с нами. Северяночка, везет всегда!</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom__block {
  padding: 80px 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 80px;
  position: relative;
}

.bottom__block h2 {
  color: #70c05b;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 36%;
  font-size: 24px;
}

p:last-child {
  color: #8f8f8f;
}

.about__top-text {
  display: flex;
  flex-direction: column;
}

h2 {
  color: #ff6633;
  line-height: 1.5;
  font-size: 27px;
  letter-spacing: 1px;
}

.about__top {
  display: flex;
  align-items: center;
}

.middle__block {
  width: 320px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 15px;
}

.middle__block p {
  line-height: 1.6;
  color: #414141;
}

.middle__block img {
  position: absolute;
  left: -15%;
}

.middle__block-main {
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

b {
  font-size: 28px;
  line-height: 1.5;
}
</style>
