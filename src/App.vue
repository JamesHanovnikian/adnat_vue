<template>
  <div id="app">  
    <div id="nav">
      <h2 class="brand-name"> ManagerHelper </h2> 
      <router-link to="/">Home </router-link> 
      <router-link  v-if="!isLoggedIn() "to="/login"> | Login </router-link> |
      <router-link v-if="isLoggedIn() "to="/logout"> Logout </router-link> |
      <router-link to="/organizations"> Organizations List </router-link> |
      <router-link to="/signup"> Signup </router-link> 
    </div>
      <br />
      <p class="loggedin" v-if="isLoggedIn()"> You are currently logged in as {{ getUserName() }}  </p>  
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
.loggedin {
  text-align: center;
}
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
</style>
