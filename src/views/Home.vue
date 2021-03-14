<template>
  <div class="home">
    <h1>Customers</h1>
    <input
      type="text"
      v-model="searchText"
      placeholder="Enter a name"
      id="search-bar"
    />
    <table>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr v-show="customer.name.match(searchText) ? true :false" v-for="customer in customers" :key="customer._id">
        <td>{{ customer.name }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>
        <router-link  :to="`customer${customer._id}`" tag="button">View</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      customers: [],
      searchText: "",
    };
  },
  methods: {
    viewCustomerDetail(id) {

    },
  },
  async created() {
    await this.$store.dispatch("getCustomersFromDb");
    let customers = this.$store.getters.getCustomers[0];
    for (let customer in customers) {
      this.customers.push(customers[customer]);
    }
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
table {
  width: 100%;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>