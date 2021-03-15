<template>
  <div class="home">
    <h1>Customers</h1>
    <input
      type="text"
      v-model="searchText"
      placeholder="Enter a name"
      id="search-bar"
    />
    <table cellspacing="0">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
      <tr
        v-show="customer.name.match(searchText) ? true : false"
        v-for="customer in customers"
        :key="customer._id"
        class="list"
      >
        <td>{{ customer.name }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td class="btn-td">
          <router-link class="btn btn-view" :to="`customer${customer._id}`" tag="button"
            >View</router-link
          >
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
#search-bar{
  width: 100%;
  height: 2rem;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid rgb(160, 160, 160);
  padding: 5px 10px;
  font-size: 1rem;
  outline-color: rgb(141, 200, 219);
}
.btn-td{
text-align: end;
}
.btn-view{
color: black;
width: 6rem !important ; 
}
.home {
  width: 100%;
  height: 100%;
}
table {
  width: 100%;
}
tr{
  box-shadow: 0px .5px 0px 0px;
}
th {
  padding: 5px;
}
tr:nth-child(even) {
  background-color: #ebebeb;
}
tr th {
  text-align: start;
}
td {
  padding: 10px 10px;
}
</style>