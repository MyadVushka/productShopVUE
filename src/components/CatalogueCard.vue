<script setup>
const props = defineProps({
  title: String,
  imgUrl: String,
  id: Number
})
</script>

<template>
  <div
    class="catalogue-card"
    :class="{ 'general-wrapper': props.id === 0 || props.id === 9 || props.id === 11 }"
  >
    <div class="img-background">
      <img :src="props.imgUrl" alt="" />
      <div class="catalogue-card__background"></div>
    </div>
    <p>{{ props.title }}</p>
  </div>
</template>

<style scoped>
.general-wrapper {
  grid-column: span 2;
}

.img-background {
  position: relative;
  width: 100%;
}

.img-background img {
  width: 100%;
}

.catalogue-card__background {
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: 100;
  bottom: 0;
  background: linear-gradient(0deg, rgba(112, 192, 91, 1) 0%, rgba(112, 192, 91, 0) 100%);
}

.catalogue-card__background:hover {
  background: linear-gradient(0deg, rgba(255, 102, 51, 1) 0%, rgba(255, 102, 51, 0) 100%);
}

.catalogue-card {
  display: flex;
  width: 100%;

  position: relative;
  cursor: pointer;
  transition: all, 0.5s;
}

.catalogue-card p {
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 200;
}
</style>
