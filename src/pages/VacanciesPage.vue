<script setup>
import VacancyCard from '../components/VacancyCard.vue'
</script>

<template>
  <section class="wrapper__info">
    <div class="innerinfo">
      <router-link to="/">Главная</router-link>
      <img src="/public/toPageList.svg" alt="" />
      <p class="top_paragraph">Вакансии</p>
    </div>
    <div class="topinfo">
      <h1 class="main-top-text">Вакансии</h1>
      <div class="vacancies">
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.vacancies {
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 40px;
  padding-bottom: 80px;
}
</style>
