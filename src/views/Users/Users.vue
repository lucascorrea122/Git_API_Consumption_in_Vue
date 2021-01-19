<template>
  <section class="users" id="users">
    <div class="users__header">
      <font-awesome-icon class="header-icon" :icon="['fas', 'arrow-left']" />
      <span>Lista de Usuário</span>
    </div>
    <hr class="users__divider" />
    <div class="users__container">
      <input class="users-input" type="text" v-model="username" />
      <button v-on:click="say({ username })">oi</button>
      <div class="users__listUsers" id="list-users"></div>
    </div>
    <div class="users__group__container">
      <div v-for="repo in repos" :key="repo" id="app">
        <div class="users__cards">
          <a href="">
            <img @click="shareData(repo.login)" class="users__image" :src="repo.avatar_url" alt=""/>
          </a>
          <h1 class="user-name">{{ repo.login }}</h1>
        </div>
        <hr class="user-divider" />
      </div>
    </div>
  </section>
  <!-- v-for="repo in repos" :key="repo" -->
</template>


<script>

import Functions from '../../services/global_functions';
export default {
  name: "users",
  el: "app",
  data() {
    return {
      titulo: "yuryalencar",
      username: "",
      repos: [],
      count: "",
    };
  },
  methods: {
    say: function () {
      Functions.getUsers(this.username).then((repos) => {
        this.repos = repos.items;
      });
    },
    shareData(username) {
      this.$router.push({ name: "profile", params: { data: username } });
    },
  },
};

</script>

<style src="./style.scss" lang="scss"/>
