<script setup>
const emits = defineEmits(['onClose'])
</script>

<template>
  <section>
    <div class="registration__wrapper">
      <div class="registration__inner">
        <img @click="emits('onClose')" src="../../public/Button.svg" alt="" />
        <h1>Вход</h1>
        <div class="">
          <form action="">
            <div class="form__input">
              <label for="mainInput">Телефон</label>
              <input type="text" key="mainInput" />
            </div>
            <button type="submit">Вход</button>
          </form>
          <div class="secondary-buttons">
            <button>Регистрация</button>
            <button>Забыли пароль?</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.secondary-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.secondary-buttons button:first-child {
  padding: 7px 15px;
  background-color: white;
  border: solid 0.1px #70c05b;
  border-radius: 3px;
  color: #70c05b;
}

.secondary-buttons button:last-child {
  background-color: inherit;
}

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

form button {
  background-color: #fcd5ba;
  color: #ff6633;
  padding: 20px;
  font-size: 20px;
  border-radius: 4px;
}

form button:focus {
  border: solid 5px black;
}

.registration__inner {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.form__input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form__input input {
  outline: none;
  padding: 15px;
  border: solid 1px #414141;
  border-radius: 3px;
  font-size: 18px;
}

.form__input label {
  color: #414141;
}

.registration__inner img {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}

section {
  position: fixed;
  height: 100svh;
  width: 100svw;
  z-index: 800;
  top: 0;
  background-color: rgba(252, 213, 186, 0.737);
}

.registration__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.registration__inner {
  padding: 60px 80px;
  border-radius: 6px;
  background-color: white;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>
