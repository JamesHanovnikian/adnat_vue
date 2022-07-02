<template>
  <div class="organization">
    <h1> Adnat </h1>
    <p> You aren't a member of any organizations. Join an existing one or create a new one. </p>
    <h2> Organizations </h2>
    {{ organizations }}
    <h2> Create an Organization </h2>
    
    
    <form v-on:submit.prevent="submit()">
    Name:
      <input type="text" v-model="newOrganizationParams.name" />
    Hourly Rate:
      <input type="text" v-model="newOrganizationParams.hourly_rate" />
    <input type="submit" value="Submit" />
    </form> 
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      organizations: [],
      newOrganizationParams: {},
    };
  },
  created: function () {
    this.orgIndex();
  },
  methods: {
    orgIndex: function () {
      axios.get("/organizations").then((response) => {
        console.log("org index", response);
        this.organizations = response.data;
      });
    },
    submit: function () {
      axios
        .post("/users", this.newOrganizationParams)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>