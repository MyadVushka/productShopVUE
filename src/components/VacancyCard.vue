<script setup></script>

<template>
  <div class="wrapper">
    <h2>Должность</h2>
    <div class="main-block">
      <div class="info-block">
        <p>Требования</p>
        <span
          >Текст про требования текст про требования текст про требования текст про требования текст
          про требования</span
        >
      </div>
      <div class="info-block">
        <p>Обязанности</p>
        <span
          >Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст
          про обязаности</span
        >
      </div>
      <div class="info-block">
        <p>Условия</p>
        <span
          >Текст про условия текст про условия текст про условия текст про условия текст про условия
          текст про условия</span
        >
      </div>
      <div class="lower-block">
        <p>Звоните</p>
        <div class="lower-info">
          <img src="/public/telephone.svg" alt="telephone" />
          <u>+7 904 271 35 90</u>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-block {
  margin-top: 15px;
}

.lower-block {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lower-block p {
  line-height: 2;
}

.wrapper {
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lower-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  letter-spacing: 0.6px;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-block p {
  line-height: 1.6;
}

.info-block span {
  line-height: 1.6;
}
</style>
