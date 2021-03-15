<template>
  <header class="header">
    <section class="links">
      <ul>
        <li>
          <router-link to="/" tag="h3" class="icon"> Manager</router-link>
        </li>

        <li><router-link to="/" tag="a">Home</router-link></li>
      </ul>
    </section>
    <section class="add-section">
      <router-link to="NewCustomer" class="btn-add" tag="button"
        >Add Customer</router-link
      >
    </section>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
.add-section {
  height: 100%;
}
.btn-add {
  height: 100%;
  border: none;
  background-color: inherit;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  outline:none;
}
.header {
  height: 4rem;
  width: 100%;
  background-color: rgb(228, 228, 228);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}
.links {
  width: 15rem;
  height: 100%;
}

.links ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.links a {
  color: black;
  font-weight: 600;
}
.icon {
  cursor: pointer;
}
</style>