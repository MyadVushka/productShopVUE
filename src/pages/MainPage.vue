<script setup>
import SliderMain from '../components/SliderMain.vue'
import CardList from '../components/CardList.vue'
import SpecialOffers from '../components/SpecialOffers.vue'
import ShopsMap from '../components/ShopsMap.vue'
import ArticlesSection from '../components/ArticlesSection.vue'

</script>

<template>
  <div class="main__wrapper">
    <SliderMain />
    <div class="wrapper">
      <CardList />
      <SpecialOffers />
      <ShopsMap />
      <ArticlesSection />
    </div>
  </div>
</template>

<style scoped>
.main__wrapper {
  background-color: #fbf8ec;
}
.wrapper {
  background-color: #fbf8ec;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 290px;
  padding: 0px 276px;
}
</style>
