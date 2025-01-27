<template>
  <div class="staff-list">
    <h2>Staff List</h2>
    <table>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Number</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="staff in staffList" :key="staff.id">
        <td>{{ staff.firstName }}</td>
        <td>{{ staff.lastName }}</td>
        <td>{{ staff.number }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ViewStaffList",
  data() {
    return {
      staffList: [
        { id: 1, firstName: "Bob", lastName: "Smith", number: "059403" },
        { id: 2, firstName: "Ellen", lastName: "McNamara", number: "059403" },
        // Add more staff here
      ],
    };
  },
};
</script>

<style scoped>
/* Add table styles */
</style>
