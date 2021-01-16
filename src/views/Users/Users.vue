<template>
   <section class="users" id="users">
       <div class="users__header">
           <font-awesome-icon class="header-icon" :icon="['fas', 'arrow-left']" />
           <span>Lista de Usuário</span>
       </div>
       <hr class="users__divider">
       <div class="users__container">
           <input class="users-input" type="text"/>
           <div class="users__listUsers" id="list-users"></div>
       </div>
   </section>
</template>

<script>
export default {
    name: "users"
}
</script>

<style src="./style.scss" lang="scss"/>

