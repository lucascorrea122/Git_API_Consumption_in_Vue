<template>
  <section class="users" id="users">
    <div class="users__header">
      <font-awesome-icon class="header-icon" :icon="['fas', 'arrow-left']" />
      <span>Lista de Usuário</span>
    </div>
    <hr class="users__divider" />
    <div class="users__container">
      <input class="users-input" type="text" v-model="username" />
      <div class="users__listUsers" id="list-users"></div>
    </div>
    <div id="app">
      <ol>
        <li v-for="repo in repos" :key="repo">{{ repo.name}}</li>
      </ol>
    </div>
  </section>
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
    };
  },
  watch: {
    username: function () {
      queryGithubAPI(this.username).then(repos=>{
          if(repos.length > 0 && repos[0].id){
              this.repos = repos
          }
      });
    },
  },
};
function queryGithubAPI(username) {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      authorization: "token b41b5136da9ca1e5a4e533d8066c1405dd2c276e"
    }
  }).then((response) => response.json());
}
</script>

<style src="./style.scss" lang="scss"/>
