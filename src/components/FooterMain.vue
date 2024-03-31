<script setup></script>

<template>
  <footer>
    <img src="/public/footerlogo.svg" alt="" />
    <ul>
      <li><router-link to="/about">О компании</router-link></li>
      <li><router-link to="/contacts">Контакты</router-link></li>
      <li><router-link to="/vacancies">Вакансии</router-link></li>
      <li>Статьи</li>
      <li>Политика обработки персональных данных</li>
    </ul>
    <ul class="footer__social">
      <li>
        <img src="/public/insta.svg" alt="" />
      </li>
      <li>
        <img src="/public/vk.svg" alt="" />
      </li>
      <li>
        <img src="/public/fb.svg" alt="fb" />
      </li>
      <li>
        <img src="/public/ok.svg" alt="" />
      </li>
    </ul>
    <div class="footer__telephone">
      <img src="/public/telephone.svg" alt="" />
      <p>8 800 777 33 33</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: url('/public/footer.svg');
  background-color: #f9f4e2;
  height: 130px;
  padding: 50px 260px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__social {
  align-items: center;
}

.footer__social li img {
  width: 30px;
  height: 30px;
}

img {
  width: 65px;
}

li {
  cursor: pointer;
}

li:hover {
  color: #ff6633;
}

ul {
  display: flex;
  gap: 40px;
}
.footer__telephone {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__telephone img {
  width: 30px;
}
</style>
