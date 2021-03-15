<template >
  <div id="alert">
    <div>
      <i @click="close">
        <font-awesome-icon class="font-icon" icon="times"
      /></i>
      <p>{{ alertMsg }}</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$store.commit("setAlertState", false);
    },
  },
  computed: {
    alertMsg() {
      return this.$store.getters.getAlertMsg;
    },
  },
};
</script>
<style scoped>
#alert {
  background-color: rgba(253, 236, 1, 0.445);
  max-width: 100%;
  height: 3.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#alert div {
  width: 100%;
}
#alert div > p {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 2rem;
  color: rgba(0, 0, 0, 0.74);
  width: 100%;
  text-align: start;
}
i {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
}
</style>