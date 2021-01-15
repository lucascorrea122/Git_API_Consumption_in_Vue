<template>
  <section class="home" id="home">
    <div class="home__container">
      <div class="home__img">
        <img src="../../assets/github_logo.png" alt="" />
        <h1 class="home-title">GitSearch</h1>
      </div>
      <div class="home__form">
        <div class="home__buttons">
          <input type="text" />
        </div>
        <div class="home__buttons">
          <button class="btn-home" type="button" onclick="">Ver Todos</button>
          <button class="btn-home" type="button" onclick="">Buscar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
};
</script>

<style src="./style.scss" lang="scss"/>

