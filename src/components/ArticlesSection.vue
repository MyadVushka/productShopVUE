<script setup>
import CommonArticle from './CommonArticle.vue'
</script>

<template>
  <section>
    <div class="article__wrapper">
      <h1>Статьи</h1>
      <div class="article__header-wrapper">
        <p>Все статьи</p>
        <img clas="headerImg" src="/public/toPageList.svg" alt="" />
      </div>
    </div>
    <div class="articles">
      <CommonArticle />
      <CommonArticle />
      <CommonArticle />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 80px;
}

.articles {
  display: flex;
  justify-content: space-between;
}

.article__wrapper {
  display: flex;
  justify-content: space-between;
}

.article__header-wrapper {
  display: flex;
  align-items: baseline;
  gap: 15px;
}
</style>
