<template>
  <div class="organization">
    <p v-if=""> You aren't a member of any organizations. Join an existing one or create a new one. </p>

    <div>
      <h2> Organizations </h2>
      <li v-for="organization in organizations">
        {{ organization.name }}
        <router-link v-bind:to="`/organization/${organization.id}/edit`"> Edit </router-link>
        <button v-on:click="joinOrganization(organization)"> Join </button> 
      </li>
    </div>
  


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
h2 {
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      organizations: [],
      organization: [],
      newOrganizationParams: {},
      info: {
        user_id: 0,
        organization_id: 0,
      },
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
    hasOrgId: function () {},
    joinOrganization: function (organization) {
      this.info.user_id = localStorage.getItem("user_id");
      this.info.organization_id = organization.id;
      axios.post("/join_organization", this.info).then((response) => {
        console.log("org post!", response);
        this.$router.push("/organization/" + organization.id);
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