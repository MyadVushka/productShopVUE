<script setup>
import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'


</script>

<template>
  <div class="main__wrapper">
    <HeaderMain />
    <router-view></router-view>
  </div>
  <FooterMain />
</template>

<style scoped>
.main__wrapper {
  background-color: #fbf8ec;
}
.wrapper {
  background-color: #fbf8ec;
  display: flex;
  flex-direction: column;
  gap: 140px;
  margin-top: 290px;
  padding: 0px 276px;
}
</style>
