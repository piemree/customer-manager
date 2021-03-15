<template >
  <div>
    <router-link tag="button" class="btn-back" to="/">Back</router-link>

    <div class="header">
      <h1>{{ currentCustomer.name }} {{ currentCustomer.lastName }}</h1>
      <section>
        <button @click="$router.push('EditCustomer')" class="btn edit">
          Edit
        </button>
        <button @click="delCustomer(currentCustomer._id)" class="btn del">
          Delete
        </button>
      </section>
    </div>
    <hr />
    <section class="info">
      <ul>
        <li>
          <font-awesome-icon class="font-icon" icon="phone" />{{
            currentCustomer.phoneNumber
          }}
        </li>
        <li>
          <font-awesome-icon class="font-icon" icon="envelope" />{{
            currentCustomer.email
          }}
        </li>
        <li>
          <font-awesome-icon class="font-icon" icon="map-marker-alt" />{{
            currentCustomer.adress
          }}
        </li>
        <li>
          <font-awesome-icon class="font-icon" icon="city" />{{
            currentCustomer.city
          }}
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  async created() {
    await this.$store.dispatch("getCustomerById", this.customerId);
  },
  methods: {
    async delCustomer(id) {
      if (confirm("Are you sure?")) {
        this.$store.commit("setAlertMsg", "Customer Deleted");
        this.$store.commit("setAlertState", true);
        let response = await this.$store.dispatch("deleteCustomerById", id);
        console.log(response);
        this.$router.push({ path: "/" });
      }
    },
  },
  computed: {
    customerId() {
      return this.$route.params.id;
    },
    currentCustomer() {
      return this.$store.getters.getCurrentCustomer;
    },
  },
};
</script>
<style scoped>
.btn-back {
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  color: blue;
  text-decoration-line: underline;
}
.font-icon {
  margin-right: 5px;
}
hr {
  margin: 2rem 0;
  border-top: 0.1px solid rgb(214, 214, 214);
}
.info {
  width: 100%;
}
.info li {
  border: 1px solid rgb(194, 194, 194);
  border-bottom: none;
}
.info li:nth-last-child(1) {
  border-bottom: 1px solid rgb(194, 194, 194);
}
.header {
  display: flex;
  align-items: flex-end;
  height: 5rem;
  justify-content: space-between;
}
.edit {
  background-color: rgb(78, 78, 197);
}
.del {
  background-color: rgb(230, 54, 54);
}
.info li {
  padding: 10px;
}
</style>