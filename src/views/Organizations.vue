<template>
  <div class="organization">
    <h1> Adnat </h1>
    <p> You aren't a member of any organizations. Join an existing one or create a new one. </p>
    <h2> Organizations </h2>
    <li v-for="organization in organizations">
      {{ organization.name }}
      <router-link v-bind:to="`/organization/${organization.id}`"> Edit </router-link>
      <router-link to="/"> Join </router-link> 
    </li>
    <h2> Create an Organization </h2>
    <form> 
    Name:
      <input type="text" v-model="newOrganizationParams.name" />
    Hourly Rate:$
      <input type="text" v-model="newOrganizationParams.hourly_rate" /> per hour 
    <button v-on:click="orgCreate()"> Create and Join </button>
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
    orgCreate: function () {
      axios
        .post("/organizations", this.newOrganizationParams)
        .then((response) => {
          console.log(response.data);
          this.router;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>