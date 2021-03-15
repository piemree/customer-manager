<template>
  <div class="home">
    <Alert v-show="isClicked"/>
    <List />
  </div>
</template>
<script>
import List from "../components/List";
import Alert from "../components/Alert";
export default {
  name: "Home",

  components: {
    List,
    Alert,
  },
  computed:{
    isClicked(){
      return this.$store.getters.getAlert
    }
  }
};
</script>


