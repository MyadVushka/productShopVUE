<script setup></script>

<template>
  <section>
    <h1>Специальные предложения</h1>
    <div class="offers">
      <div class="offers__block offer-first">
        <div class="offers__text first">
          <h1 class="offer__text_main">
            Оформите карту <br />
            «Северяночка»
          </h1>
          <p class="offer__text_secondary">
            И получайте бонусы при покупке <br />
            в магазинах и на сайте
          </p>
        </div>
        <img src="/offerscard1.png" alt="" />
      </div>
      <div class="offers__block offer-second">
        <div class="offers__text second">
          <h1 class="offer__text_main">
            Покупайте <br />
            акционные товары
          </h1>
          <p class="offer__text_secondary">
            И получайте вдвое больше <br />
            бонусов
          </p>
        </div>
        <img src="/offerscard2.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>

.offers {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.offers__block {
  display: flex;
  padding: 10px 40px;
  align-items: center;
  gap: 50px;
  border-radius: 8px;
}

.offer-first {
  background-color: #fcd5ba;
  box-shadow: 0px 0px 27px 7px rgba(252, 213, 186, 0.6);
}

.offer-second {
  background-color: #e5ffde;
  
}

.offers__text {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.offer__text_main,
.offer__text_secondary {
  color: #414141;
  line-height: 1.6;
}

.offer__text_secondary {
  font-family: 'Rubik';
}
</style>
