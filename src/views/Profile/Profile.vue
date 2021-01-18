<template>
  <section class="profile" id="profile">
    <div class="profile__container">
      <div class="profile__header">
        <img class="profile__image" :src="user.avatar_url" alt="" />
        <h1 class="profile-login">{{ user.login }}</h1>
        <div class="profile__name">
          <font-awesome-icon class="profile-icon" :icon="['fas', 'user']" />
          <span class="profile-name">{{ user.name }}</span>
        </div>
      </div>
      <div class="profile__status">
        <div class="profile__following profile__status__card">
          <font-awesome-icon class="profile-icon" :icon="['fas', 'male']" />
          <span>{{ user.following }}</span>
          <span class="profile__status__name">Seguindo</span>
        </div>
        <div class="profile__projects profile__status__card">
          <div>
            <font-awesome-icon class="profile-icon" :icon="['fas', 'folder-open']"/>
            <span>{{ user.public_repos }}</span>
          </div>

          <span class="profile__status__name">Projetos</span>
        </div>
        <div class="profile__followers profile__status__card">
          <font-awesome-icon class="profile-icon" :icon="['fas', 'users']" />
          <span>{{ user.followers }}</span>
          <span class="profile__status__name">Seguidores</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      username: "lucascorrea122",
      id: "",
      user: [],
      login: "",
    };
  },
  beforeMount() {
    getDadosUser(this.username).then((user) => {
      (this.id = user.id), (this.user = user);
    });
    // console.log(getDadosUser(this.username));
  },
};
function getDadosUser(username) {
  //   return fetch(`https://api.github.com/users/${username}/repos`, {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: {
      authorization: "token 274b90d9b90e084f99727ee003425938f68513d2",
    },
  }).then((response) => response.json());
}
</script>

<style src="./style.scss" lang="scss" />

