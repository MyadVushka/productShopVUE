<script setup>
import { reactive } from 'vue'

const buttonStyle = reactive({
  1: false,
  2: false,
  3: false,
  4: false
})


const toggleButton = (id) => {
  for (const key in buttonStyle) {
    buttonStyle[key] = false
  }

  buttonStyle[id] = !buttonStyle[id]
}
</script>

<template>
  <section class="map-wrapper">
    <h1>Наши магазины</h1>
    <div class="">
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
      <img class="image__shop" src="/public/image 12.png" alt="mapimg" />
    </div>
  </section>
</template>

<style scoped>
.button {
  padding: 10px 15px;
  background-color: #f3f2f1;
  color: #606060;
  border-radius: 6px;
}
.map-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.buttons {
  display: flex;
  gap: 24px;
}
.button_active {
  padding: 10px 15px;
  background-color: #70c05b;
  color: white;
  border-radius: 6px;
}

.image__shop {
  margin-top: 30px;
  width: 100%;
}
</style>
