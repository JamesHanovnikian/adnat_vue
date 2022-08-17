<template>
  <div id="app">
    <div id="nav">
      <h2 class="brand-name"> Adnat </h2> 
      <router-link to="/">Home</router-link> 
      <router-link  v-if="!isLoggedIn()"to="/login"> | Login </router-link> |
      <router-link v-if="isLoggedIn() "to="/logout"> Logout </router-link> 
      <small v-if="isLoggedIn()"> Currently logged in as {{ getUserName() }} </small>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserName: function () {
      return localStorage.getItem("name");
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#nav .brand-name {
  margin-right: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
