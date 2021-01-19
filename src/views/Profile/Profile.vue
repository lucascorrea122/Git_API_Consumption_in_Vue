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
            <font-awesome-icon
              class="profile-icon-stats"
              :icon="['fas', 'male']"
            />
            <span class="profile-status">{{ user.following }}</span>
          </div>
          <span class="profile__status__name">Seguindo</span>
        </div>
        <div class="profile__projects profile__status__card">
          <div>
            <font-awesome-icon
              class="profile-icon-stats"
              :icon="['fas', 'folder-open']"
            />
            <span class="profile-status">{{ user.public_repos }}</span>
          </div>

          <span class="profile__status__name">Projetos</span>
        </div>
        <div class="profile__followers profile__status__card">
          <div>
            <font-awesome-icon
              class="profile-icon-stats"
              :icon="['fas', 'users']"
            />
            <span class="profile-status">{{ user.followers }}</span>
          </div>
          <span class="profile__status__name">Seguidores</span>
        </div>
      </div>
      <div class="profile__tabs">
        <div class="tabs__choose">
          <div
            class="profile-tabs"
            @click="selectTab('1')"
            :class="[activeTab === '1' ? 'active' : '']"
          >
            <p class="tabs-itens">Sobre</p>
          </div>
          <div
            class="profile-tabs"
            @click="selectTab('2')"
            :class="[activeTab === '2' ? 'active' : '']"
          >
            <p class="tabs-itens">Projetos</p>
          </div>
        </div>
        <div class="tabs__content">
          <div class="content__one" v-if="activeTab === '1'">
            <div class="profile__bio">
              <h4 class="bio-title">Bio</h4>
              <p class="bio-description" v-if="user.bio">
                {{ user.bio }}
              </p>
              <p class="bio-description" v-else>Bio não preenchida</p>

              <div class="profile__name profile-city">
                <font-awesome-icon
                  class="profile-icons"
                  :icon="['fas', 'home']"
                />
                <span class="profile-location" v-if="user.location">{{
                  user.location
                }}</span>
                <span class="profile-location" v-else
                  >Localização não informada</span
                >
              </div>
              <div class="profile__name profile-website">
                <font-awesome-icon
                  class="profile-icons icon-computer"
                  :icon="['fas', 'tv']"
                />
                <span class="profile-location" v-if="user.blog">{{
                  user.blog
                }}</span>
                <span class="profile-location" v-else
                  >Página não informada</span
                >
              </div>
            </div>
          </div>
          <div class="content__two" v-if="activeTab === '2'">
            <div class="repos__container">
              <div class="repos__cardss" v-for="repo in repos" :key="repo" id="app">
                <div class="repos__cards">
                  <h1 class="repos-title">{{ repo.name }}</h1>
                  <p class="repos-description" v-if="repo.description">{{repo.description}}</p>
                  <p class="repos-description" v-else>Projeto sem descrição</p>
                  <ul class="repo-lang">
                    <li v-if="repo.language">{{repo.language}}</li>
                    <li v-else>Projeto sem Linguagem</li>
                  </ul>
                </div>
                <hr class="repos-divider" />
              </div>
            </div>
          </div>
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
      username: "yuryalencar",
      id: "",
      user: [],
      login: "",
      activeTab: "1",
      repos: [],
    };
  },
  beforeMount() {
    getDadosUser(this.username).then((user) => {
      (this.id = user.id), (this.user = user);
    });

    getRepos(this.username).then((repo) => {
      this.repos = repo;
    });
    // console.log(getDadosUser(this.username));
  },
  methods: {
    selectTab(selectTabs) {
      this.activeTab = selectTabs;
    },
  },
};
function getDadosUser(username) {
  //   return fetch(`https://api.github.com/users/${username}/repos`, {
  return fetch(`https://api.github.com/users/${username}`, {
    headers: {
      authorization: "token b60bdbbbd9b471ea66cdf7e234b5f4bf9f5f2c2b",
    },
  }).then((response) => response.json());
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?page=1&per_page=8`,
    {
      headers: {
        authorization: "token b60bdbbbd9b471ea66cdf7e234b5f4bf9f5f2c2b",
      },
    }
  ).then((response) => response.json());
}
</script>

<style src="./style.scss" lang="scss"/>

