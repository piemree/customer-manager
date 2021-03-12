import axios from "axios";

const state = () => ({
  customer: {
    name: "a",
    lastName: "",
    email: "",
    phoneNumber: "",
    adress: "",
    city: "",
  },
});
const getters = {
  getCustomer(state) {
    return state.customer;
  },
};

const mutations = {
  setCustomer(state, customer) {},
};

const actions = {
  saveCustomer(VuexContext, customer) {
    axios.post("http://localhost:3000/new-customer",VuexContext.state.customer).then((response) => {
      console.log(response);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
