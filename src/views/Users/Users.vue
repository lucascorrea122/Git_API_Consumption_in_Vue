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
          <router-link to="/profile/user"><img class="users__image" :src="repo.avatar_url" alt="" /></router-link>
          
          <h1 class="user-name">{{ repo.login }}</h1>
        </div>
        <hr class="user-divider" />
      </div>
    </div>
  </section>
  <!-- v-for="repo in repos" :key="repo" -->
</template>

<script>
export default {
  name: "users",
  el: "app",
  data() {
    return {
      titulo: "ola mundo",
      username: "",
      repos: [],
      count: "",
    };
  },
  methods: {
    say: function () {
      queryGithubAPI(this.username).then((repos) => {
        this.repos = repos.items;
      });
    },
  },

};
function queryGithubAPI(username) {
  const page = 1;
  //   return fetch(`https://api.github.com/users/${username}/repos`, {
  return fetch(
    `https://api.github.com/search/users?q=${username}&page=${page}&per_page=10`,
    {
      headers: {
        authorization: "token f8ca344c9825c4b94a29b19f061734476983fa27",
      },
    }
  ).then((response) => response.json());
}
</script>

<style src="./style.scss" lang="scss"/>
