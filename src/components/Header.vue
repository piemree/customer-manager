<template>
  <header class="header">
    <section class="links">
      <ul>
        <li><h3 class="icon">Manager</h3></li>
        <li>Home</li>
      </ul>
    </section>
    <section>
      <button>Add Customer</button>
    </section>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
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
</style>