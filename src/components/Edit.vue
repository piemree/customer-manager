<template>
  <form>
    <h1>Edit Customer</h1>
    <section class="customer-info">
      <h3>Customer info</h3>
      <section class="form">
        <p>First Name</p>
        <input v-model="customer.name" type="text" />
        <p>Last Name</p>
        <input v-model="customer.lastName" type="text" />
      </section>
    </section>
    <section class="customer-info">
      <h3>Customer Contact</h3>
      <section class="form">
        <p>Email</p>
        <input v-model="customer.email" type="email" />
        <p>Phone</p>
        <input v-model="customer.phoneNumber" type="tel" />
      </section>
    </section>
    <section class="customer-info">
      <h3>Customer Location</h3>
      <section class="form">
        <p>Adress</p>
        <input v-model="customer.adress" type="text" />
        <p>City</p>
        <input v-model="customer.city" type="text" />
      </section>
    </section>
    <button @click.prevent="update" class="btn save">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      customer: {
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        adress: "",
        city: "",
        _id: "",
      },
    };
  },
  created() {
    let customer = this.$store.getters.getCurrentCustomer;
    this.customer = { ...customer };
    console.log(this.customer);
  },
  methods: {
    async update() {
      let isEmpty = true;

      for (let el in this.customer) {
        if (this.customer[el] == "") {
          isEmpty = true;
          break;
        } else {
          isEmpty = false;
        }
      }

      if (!isEmpty) {
        if (confirm("Are you sure?")) {
          this.$store.commit("setAlertMsg", "Customer Edited");
          this.$store.commit("setAlertState", true);
          await this.$store.dispatch("updateCustomer", this.customer);

          this.$router.push({ path: "/" });
        }
      } else {
        alert("Please fill all areas.");
      }
    },
  },
};
</script>
<style scoped>
.customer-info {
  background-color: rgb(228, 228, 228);
  margin: 1rem 0;
  border-radius: 5px;
  padding: 1.5rem;
}
.customer-info h3 {
  font-weight: normal;
  margin-bottom: 0.5rem;
}
.customer-info p {
  font-weight: bolder;
}
.customer-info input {
  width: 100%;
  height: 2rem;
  margin: 5px 0 15px 0;
  border-radius: 5px;
  border: 1px solid rgb(160, 160, 160);
  padding: 5px 10px;
  font-size: 1rem;
  outline-color: rgb(141, 200, 219);
}
.save {
  background-color: rgb(78, 78, 197);
}
</style>