<template>
  <div class="Shifts">
  
    <table>
      <tr>
        <th> Employee Name </th>
        <th> Start Time </th>
        <th> Finish time </th>
        <th> Break length(minutes) </th>
        <th> Hours worked </th>
        <th> Shift Cost </th>
      </tr>



    </table>
    <p> This is Shifts!!</p>

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
</style>

<script>
export default {
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
};
</script>