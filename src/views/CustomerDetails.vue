<template >
  <div>
    <router-link tag="button" to="/">Back</router-link>

    <div class="header">
      <h1>{{currentCustomer.name}} {{currentCustomer.lastName}}</h1>
      <section>
        <button class="btn edit">Edit</button>
        <button class="btn del">Delete</button>
      </section>
    </div>
    <hr />
    <section class="info">
      <ul>
        <li>{{currentCustomer.phone}}</li>
        <li>{{currentCustomer.email}}</li>
        <li>{{currentCustomer.adress}}</li>
        <li>{{currentCustomer.city}}</li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customer: {
        name: "",
        phone: "",
        adress: "",
        city: "",
      },
    };
  },
  async created() {
     
    let response = await this.$store.dispatch("getCustomerById", this.customerId);



  },
  computed: {
    customerId() {
      return this.$route.params.id;
    },
    currentCustomer(){
        return this.$store.getters.getCurrentCustomer
    }
  },
};
</script>
<style scoped>
hr {
  margin: 2rem 0;
}
.info {
  width: 100%;
}
.info li {
  border: 1px solid grey;
  border-bottom: none;
}
.info li:nth-last-child(1) {
  border-bottom: 1px solid grey;
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
</style>