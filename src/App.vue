<template>
  <div id="app">
    <div id="nav">
      <h2> Adnat </h2> 
      <p> {{ isLoggedIn() }}</p>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login </router-link> |
      <router-link v-if="isLoggedIn() "to="/logout"> Logout </router-link> 
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
