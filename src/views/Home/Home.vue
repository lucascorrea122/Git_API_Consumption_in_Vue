<template>
  <section class="home" id="home">
    <div class="home__container">
      <div class="home__img">
        <img src="../../assets/github_logo.png" alt="github-logo" />
        <h1 class="home-title">GitSearch</h1>
      </div>
      <div class="home__form">
        <div class="home__buttons">
          <input class="home-input" type="text" placeholder="pesquisar..." v-model="username"/>
        </div>
        <div class="home__buttons">
          <button   v-on:click="getUsers()" class="btn-home" id="todos" type="button" onclick="">Ver Todos</button>
          <button  v-on:click="getUser()" class="btn-home" id="buscar" type="button" onclick="">Buscar</button>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>

export default {
  name: "home",
  data(){
    return{
      username: "",
    }
  },
  methods:{
    getUser(){
      this.$router.push({ name: "profile", params: { data: this.username} });
    },
    getUsers(){
      this.$router.push({ name: "users", query:{username: this.username}});
    }
  }
};
</script>

<style src="./style.scss" lang="scss"/>

