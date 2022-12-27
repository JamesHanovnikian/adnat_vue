<template>
  <div class="Shifts">
  
  <h2> {{ organization.name }} </h2>
  <p> Shifts </p>
    <table>
      <tr>
        <th> Employer Name </th>
        <th> Shift Date </th>
        <th> Start Time </th>
        <th> Finish time </th>
        <th> Break length(minutes) </th>
        <th> Hours worked </th>
        <th> Shift Cost </th>
      </tr>
      <tr v-for="shift in shifts">
        <td> {{ shift.organization.name }} </td>
        <td> {{ formattedDate(shift.start)}} </td>
        <td> {{ formattedTime(shift.start)}} </td> 
        <td> {{ formattedTime(shift.finish)}} </td>
        <td> {{ shift.break_length }} minutes </td>
        <td> {{ hoursWorked(shift.start, shift.finish) }} </td>
        <td> $ {{ shiftCost(shift.break_length, shift.start, shift.finish, shift.organization.hourly_rate)}} 
        </td>
      </tr>
    </table>
    <br /> 
    <br /> 
    <br /> 
    <p> Add a Shift </p>
    

  
    <button v-on:click="convertTime('2013-10-06')"> Checking </button>


      <table>
        <tr>
              <th> Employer Name </th>
              <th> Shift Date </th>
              <th> Start Time </th>
              <th> Finish time </th>
              <th> Break length(minutes) </th>
            </tr>
            <tr> 
              <td> {{ shifts[0].organization.name }} </td>
              <td> <input v-model="date" type="text"></td>
              <td> <input v-model="newShiftsParams.start" type="text"> </td>
              <td> <input v-model="newShiftsParams.finish" type="text"></td>
              <td> <input v-model="newShiftsParams.break_length" type="text"> </td>
              <button v-on:click="createShift()"> Create Shift </button>
            </tr>
        </table> 
  </div>
</template>

<style>
table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 10px 20px;
}

th {
  background-color: rgb(235, 235, 235);
}

td {
  text-align: center;
}

h2 {
  text-align: left;
  padding-left: 20px;
}

p {
  text-align: left;
  font-size: 1.2rem;
  padding-left: 20px;
}
</style>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data: function () {
    return {
      shifts: [],
      organization: [],
      username: [],
      date: {},
      newShiftsParams: {},
    };
  },
  created: function () {
    this.shiftsIndex();
    this.orgShow();
    this.fetchUser();
  },
  methods: {
    shiftsIndex: function () {
      axios.get("/shifts").then((response) => {
        console.log("shift index", response);
        this.shifts = response.data;
      });
    },
    orgShow: function () {
      axios.get("/organizations/" + this.$route.params.id).then((response) => {
        console.log("org show!", response);
        this.organization = response.data;
      });
    },
    fetchUser: function () {
      axios.get("/get_username").then((response) => {
        console.log("username", response);
        this.username = response.data.name;
      });
    },
    formattedDate: function (timestamp) {
      return moment(timestamp).format("MM/DD/YYYY");
    },
    formattedTime: function (timestamp) {
      return moment(timestamp).format("h:mm:ss a");
    },
    convertTime: function (date) {
      console.log(moment.utc(date).format());
    },
    hoursWorked: function (start, finish) {
      return moment(finish).diff(start, "hours");
    },
    shiftCost: function (break_length, start, finish, hourly_rate) {
      var hoursWorked = moment(finish).diff(start, "hours");
      var workedMinutes = hoursWorked * 60 - break_length;
      var workedHours = workedMinutes / 60;
      if (workedHours <= 0) {
        return 0;
      } else {
        return workedHours * hourly_rate;
      }
    },
    createShift: function () {
      this.utc_date = moment.utc(this.date).format();
      console.log(this.utc_date);
      this.newShiftParams.start = this.utc.date;
      console.log(this.newShiftsParams);
      // Get the date.
      // start = date + the time of the start.
      // Need some logic to figure out AM & PM
      // Finish - date + finish.. same thing
    },
  },
};
</script>
