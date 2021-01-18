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
          <div>
            <font-awesome-icon class="profile-icon" :icon="['fas', 'male']" />
            <span class="profile-status">{{ user.following }}</span>
          </div>
          <span class="profile__status__name">Seguindo</span>
        </div>
        <div class="profile__projects profile__status__card">
          <div>
            <font-awesome-icon class="profile-icon" :icon="['fas', 'folder-open']" />
            <span class="profile-status">{{ user.public_repos }}</span>
          </div>

          <span class="profile__status__name">Projetos</span>
        </div>
        <div class="profile__followers profile__status__card">
          <div>
            <font-awesome-icon class="profile-icon" :icon="['fas', 'users']" />
            <span class="profile-status">{{ user.followers }}</span>
          </div>
          <span class="profile__status__name">Seguidores</span>
        </div>
      </div>
      <div class="profile__tabs">
        <ul class="tabs__choose">
          <li @click="selectTab('1')" :class="[activeTab === '1' ? 'active' : '']">SOBRE</li>
          <li @click="selectTab('2')" :class="[activeTab === '2' ? 'active' : '']">PROJETOS</li>
        </ul>
        <div class="tabs__content">
          <div class="content__one" v-if="activeTab === '1'">ONE</div>
          <div class="content__two" v-if="activeTab === '2'">two</div>
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
      activeTab: "1",
    };
  },
  beforeMount() {
    getDadosUser(this.username).then((user) => {
      (this.id = user.id), (this.user = user);
    });
    // console.log(getDadosUser(this.username));
  },
  methods:{
    selectTab(selectTabs){
      this.activeTab = selectTabs;
    }
  }
};
function getDadosUser(username) {
  //   return fetch(`https://api.github.com/users/${username}/repos`, {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: {
      authorization: "token f8ca344c9825c4b94a29b19f061734476983fa27",
    },
  }).then((response) => response.json());
}
</script>

<style src="./style.scss" lang="scss" />

