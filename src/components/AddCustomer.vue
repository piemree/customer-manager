<template>
  <div>
    <h1>Edit Customer</h1>
    <section class="customer-info">
      <h3>Customer info</h3>
      <section class="form">
        <p>First Name</p>
        <input type="text" />
        <p>Last Name</p>
        <input type="text" />
      </section>
    </section>
    <section class="customer-info">
      <h3>Customer Contact</h3>
      <section class="form">
        <p>Email</p>
        <input type="email" />
        <p>Phone</p>
        <input type="tel" />
      </section>
    </section>
    <section class="customer-info">
      <h3>Customer Location</h3>
      <section class="form">
        <p>Adress</p>
        <input type="text" />
        <p>City</p>
        <input type="text" />
      </section>
    </section>
    <button class="btn save">Submit</button>
  </div>
</template>
<script>
export default {};
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