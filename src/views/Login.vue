<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label> <br /> 
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label> <br /> 
        <input type="password" v-model="newSessionParams.password" />
      </div>
      <!-- <div>
        <label>Datetime:</label> <br /> 
        <input type="datetime-local" v-model="newSessionParams.datetime" />
      </div> -->
      <input type="submit" value="Submit" />
      
    </form>
    <router-link to="/signup">Sign up</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"];
          "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("name", response.data.name);
          var organization = response.data.organization;
          console.log(organization);
          if (organization == null) {
            this.$router.push("/organizations");
          } else {
            this.$router.push("/organization/" + organization);
          }
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>