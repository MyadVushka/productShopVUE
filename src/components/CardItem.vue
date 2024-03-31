<script setup>
const props = defineProps({
  id: Number,
  title: String,
  cost: Number,
  imgUrl: String,
  isFavourite: Boolean,
  isAdded: Boolean,
  hasDiscount: Boolean
})

const emit = defineEmits(['addToCart', 'addToFavourite'])

const onFavouriteHandler = (id) => {
  console.log('id: ' + props.id)
  try {
    emit('addToFavourite', id)
  } catch (error) {
    console.log(error)
  }
}

const onAddHandler = (id) => {
  emit('addToCart', id)
}
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__img">
      <img class="img-cart" :src="props.imgUrl" alt="" />
      <img
        @click="onFavouriteHandler(props.id)"
        class="img-favourite"
        :src="
          props.isFavourite
            ? 'public/card-item-favouriteState.svg'
            : '/public/card-item-favourite.svg'
        "
        alt=""
      />
      <div v-if="props.hasDiscount" class="discount__state">
        <span>-50%</span>
      </div>
    </div>
    <div v-if="props.hasDiscount" class="wrapper__cost">
      <div class="">
        <h2 class="wrapper__cost_top-text">{{ (props.cost * 0.5).toFixed(2) }} ₽</h2>
        <p class="wrapper__cost_bottom-text">С картой</p>
      </div>
      <div class="">
        <h2 class="wrapper__cost_top-text-thin">{{ props.cost }} ₽</h2>
        <p class="wrapper__cost_bottom-text">Обычная</p>
      </div>
    </div>
    <div v-else class="wrapper__cost">
      <h2 class="wrapper__cost_top-text">{{ props.cost }} ₽</h2>
    </div>
    <div class="wrapper__title">
      <p>{{ props.title }}</p>
    </div>
    <button
      @click="onAddHandler(props.id)"
      :class="{ wrapper__button: !props.isAdded, wrapper__button_added: props.isAdded }"
    >
      {{ props.isAdded ? 'Добавлено' : 'Добавить в корзину' }}
    </button>
  </div>
</template>

<style scoped>
.wrapper__button_added {
  background: none;
  border: 1px solid #70c05b;
  color: #70c05b;
  padding: 10px;
  border-radius: 6px;
  transition: all 0.2s;
}

.wrapper {
  height: 350px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.wrapper__title {
  width: 270px;
  line-height: 1.5;
}

.wrapper__img {
  position: relative;
}

.discount__state {
  position: absolute;
  left: 2%;
  bottom: 0;
  padding: 5px 7px;
  background-color: #ff6633;
  border-radius: 5px;
  display: inline-block;
  color: white;
}
.img-cart {
  width: 250px;
}

.wrapper__cost {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.img-favourite {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.wrapper__cost_top-text {
  font-weight: bold;
  font-family: 'Rubik';
  color: #414141;
  font-size: 20px;
}

.wrapper__cost_top-text-thin {
  font-weight: 400;
  font-size: 18px;
  font-family: 'Rubik';
}

.wrapper__cost_bottom-text {
  color: #bfbfbf;
  font-size: 14px;
}

.wrapper__button {
  background: none;
  border: 1px solid #70c05b;
  color: #70c05b;
  padding: 10px;
  border-radius: 6px;
  transition: all 0.2s;
}

.wrapper__button:hover,
.wrapper__button_added:hover {
  background-color: #ff6633;
  border-color: #ff6633;
  color: white;
}
</style>
