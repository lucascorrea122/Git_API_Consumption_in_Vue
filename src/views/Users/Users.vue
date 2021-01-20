<template>
  <section class="users" id="users">
    <div class="users__header">
      <router-link to="/"><font-awesome-icon class="header-icon" :icon="['fas', 'arrow-left']" /></router-link>
      
      <span>Lista de Usuário</span>
    </div>
    <hr class="users__divider" />
    <div class="user_container_main">
      <div class="users__container">
        <div class="submit-line">
          <input type="text" v-model="username" />
          <button
            class="submit-lente"
            type="submit"
            v-on:click="say({ username })"
          >
            <font-awesome-icon class="header-icon" :icon="['fas', 'search']" />
          </button>
        </div>
      </div>

      <div class="users__group__container">
        <div class="users-cards" v-for="repo in repos" :key="repo" id="app">
          <div class="users__cards">
            <div>
              <a href="">
                <img
                  @click="shareData(repo.login)"
                  class="users__image"
                  :src="repo.avatar_url"
                  alt="image-user"
                />
              </a>
            </div>
            <div>
              <h1 class="user-name">{{ repo.login }}</h1>
            </div>
          </div>
          <hr class="user-divider" />
        </div>
      </div>
    </div>
  </section>
  <!-- v-for="repo in repos" :key="repo" -->
</template>


<script>
import Functions from "../../services/global_functions";
export default {
  name: "users",
  el: "app",
  data() {
    return {
      username: "",
      repos: [],
      count: "",
    };
  },
  methods: {
    say(user) {
      Functions.getUsers(this.username).then((repos) => {
        this.repos = repos.items;
      });
      this.$router.push({ query: user });
    },
    shareData(username) {
      this.$router.push({ name: "profile", params: { data: username } });
    },
  },
  beforeCreate() {
    Functions.getUsers(this.$route.query.username).then((repos) => {
      this.repos = repos.items;
    });
  },
  watch: {
    // username: function () {
    //   this.say();
    // },
  },
};
</script>

<style src="./style.scss" lang="scss"/>
