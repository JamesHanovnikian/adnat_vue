<template>
  <div class="OrganizationShow">
    <h1> Adnat </h1>
    <h2> Edit Organization </h2>

    
    <form v-on:submit.prevent="updateOrganization(organization)">
      Name:
      <input type="text" v-model="organization.name" />
      Houryl Rate:
      <input type="text" v-model="organization.hourly_rate" />
      <input type="submit" value="Update" />
    </form>
    <button v-on:click="destroyOrganization(organization)"> Delete Organization </button>


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      organization: [],
    };
  },
  created: function () {
    this.orgShow();
  },
  methods: {
    orgShow: function () {
      axios.get("/organizations/" + this.$route.params.id).then((response) => {
        console.log("org show!", response);
        this.organization = response.data;
      });
    },
    updateOrganization: function (organization) {
      var editOrganizationParams = organization;
      axios
        .patch("/organizations/" + organization.id, editOrganizationParams)
        .then((response) => {
          console.log("org update", response);
          this.$router.push("/organizations");
        })
        .catch((error) => {
          console.log("org update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyOrganization: function () {
      axios.delete("/organizations/" + organization.id).then((response) => {
        console.log("org destroy", response);
        this.$router.push("/organizations");
      });
    },
  },
};
</script>