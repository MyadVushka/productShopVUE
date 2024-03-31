<script setup></script>

<template>
  <div class="wrapper__slider">
    <div class="wrapper__slider_background">
      <img src="/public/slider-products.png" alt="" />
      <h1 class="wrapper__slider_text">Доставка бесплатно от 1000 ₽</h1>
    </div>
  </div>
</template>

<style scoped>
.wrapper__slider {
  width: 100%;
  position: absolute;
  top: 9%;
  margin-bottom: 40px;
}

.wrapper__slider_background {
  background: url('/public/slider-img.png');
  width: 100%;
  height: 200px;
  padding: 0 320px;
  display: flex;
  align-items: center;
}

.wrapper__slider_text {
  color: #414141;
  font-family: 'Rubik';
  font-size: 50px;
}
</style>
