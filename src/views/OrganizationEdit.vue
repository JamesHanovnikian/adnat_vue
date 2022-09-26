<template>
  <div class="OrganizationEdit">
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
2
<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      organization: [],
      organizations: [],
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
    destroyOrganization: function (organization) {
      axios.delete("/organizations/" + organization.id).then((response) => {
        console.log("org destroy", response);
        var index = this.organizations.indexOf(organization);
        this.organizations.splice(index, 1);
        this.$router.push("/organizations");
      });
    },
    orgIndex: function () {
      axios.get("/organizations").then((response) => {
        console.log("org index", response);
        this.organizations = response.data;
      });
    },
  },
};
</script>