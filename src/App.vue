<template>
  <div id="app">
    <Header />
    <main class="conteiner">
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: calc(100vh - 4rem);
}
.conteiner {
  padding: 3rem 5rem;
}
.btn {
  height: 2rem;
  min-width: 3rem;
  outline: none;
  border-radius: 5px;
  border: 1px solid grey;
  font-weight: 600;
  margin: 0 5px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
}
</style>
