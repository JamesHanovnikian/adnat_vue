<template>
  <div class="OrganizationShow">
    <h2> {{ organization.name }} </h2>
     <router-link v-bind:to="`/organization/${organization.id}/shifts`"> View Shifts </router-link>
    <router-link v-bind:to="`/organization/${organization.id}/edit`"> Edit </router-link> <br> 
    <button v-on:click="leaveOrganization(organization)"> Leave </button>

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
      organizations: [],
      info: {
        user_id: 0,
        organization_id: 0,
      },
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
    leaveOrganization: function (organization) {
      this.info.user_id = localStorage.getItem("user_id");
      this.info.organization_id = organization.id;
      axios.post("/leave_organization/", this.info).then((response) => {
        console.log("leave org", response);
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