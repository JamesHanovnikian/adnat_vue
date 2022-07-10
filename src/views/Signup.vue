<template>
  <div class="signup"> 
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <br /> 
        <input type="text" v-model="newUserParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <br /> 
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password: (six characters minimum)</label> <br /> 
        <input type="password" v-model="newUserParams.password" />
        <br /> 
        <small v-if="newUserParams.password.length < 6"> Password is too short. </small>
      </div>
      <div>
        <label>Password confirmation:</label>
        <br /> 
        <input type="password" v-model="newUserParams.password_confirmation" />
        
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>