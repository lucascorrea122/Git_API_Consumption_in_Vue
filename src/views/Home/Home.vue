<template>
  <section class="home" id="home">
    <div class="home__container">
      <div class="home__img">
        <img src="../../assets/github_logo.png" alt="" />
        <h1 class="home-title">GitSearch</h1>
      </div>
      <div class="home__form">
        <div class="home__buttons">
          <input class="home-input" type="text" placeholder="pesquisar..."/>
        </div>
        <div class="home__buttons">
          <button class="btn-home" id="todos" type="button" onclick="">Ver Todos</button>
          <button class="btn-home" id="buscar" type="button" onclick="">Buscar</button>
        </div>
      </div>
    </div>
    <router-link to="/users">Ir para users</router-link>
  </section>
  
</template>

<script>
export default {
  name: "home",
};
</script>

<style src="./style.scss" lang="scss"/>

