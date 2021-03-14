import axios from "axios";

const state = () => ({
  customer: [],
  currentCustomer: {
    name: "",
    lastName:"",
    email:"",
    phone: "",
    adress: "",
    city: "",
    id: "",
  },
});
const getters = {
  getCustomers(state) {
    return state.customer || [];
  },
  getCurrentCustomer(state) {
    return state.currentCustomer;
  },
};

const mutations = {
  setCustomers(state, customer) {
    state.customer = [customer];
  },
  setCurrentCustomer(state, currentCustomer) {
      console.log(currentCustomer.name);
    state.currentCustomer.name = currentCustomer.name
    state.currentCustomer.lastName = currentCustomer.lastName
    state.currentCustomer.email = currentCustomer.email
    state.currentCustomer.phone = currentCustomer.phoneNumber
    state.currentCustomer.adress = currentCustomer.adress
    state.currentCustomer.city = currentCustomer.city
    state.currentCustomer.id = currentCustomer._id
  },
};

const actions = {
  async saveCustomer(VuexContext, customer) {
    let response = axios.post("http://localhost:3000/new-customer", customer);
    return response;
  },
  async getCustomersFromDb(VuexContext) {
    let response =await axios.get("http://localhost:3000/get-customers");

    VuexContext.commit("setCustomers", response.data.customers);
    return response
  },
  async getCustomerById(VuexContext,customerId){
    let response= await axios.post("http://localhost:3000/get-customer-by-id",{id:customerId})
    VuexContext.commit("setCurrentCustomer", response.data.currentCustomer);

    return response
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
