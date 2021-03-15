import axios from "axios";

const state = () => ({
  customer: [],
  currentCustomer: {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    adress: "",
    city: "",
    _id: "",
  },
  alert: false,
  alertMsg:""
});
const getters = {
  getAlertMsg(state) {
    return state.alertMsg;
  },
  getAlert(state) {
    return state.alert;
  },
  getCustomers(state) {
    return state.customer || [];
  },
  getCurrentCustomer(state) {
    return state.currentCustomer;
  },
};

const mutations = {
  setAlertState(state, alertVal) {
    state.alert = alertVal;
  },
  setAlertMsg(state, msg) {
    state.alertMsg = msg;
  },
  setCustomers(state, customer) {
    state.customer = [customer];
  },
  setCurrentCustomer(state, currentCustomer) {
    state.currentCustomer.name = currentCustomer.name;
    state.currentCustomer.lastName = currentCustomer.lastName;
    state.currentCustomer.email = currentCustomer.email;
    state.currentCustomer.phoneNumber = currentCustomer.phoneNumber;
    state.currentCustomer.adress = currentCustomer.adress;
    state.currentCustomer.city = currentCustomer.city;
    state.currentCustomer._id = currentCustomer._id;
  },
};

const actions = {
  async saveCustomer(VuexContext, customer) {
    let response = axios.post("http://localhost:3000/new-customer", customer);
    return response;
  },

  async updateCustomer(VuexContext, customer) {
    let response = await axios.post("http://localhost:3000/update-customer", {
      customer: customer,
    });
    VuexContext.commit("setCustomers", response.data.customers);

    return response;
  },
  async getCustomersFromDb(VuexContext) {
    let response = await axios.get("http://localhost:3000/get-customers");

    VuexContext.commit("setCustomers", response.data.customers);
    return response;
  },
  async getCustomerById(VuexContext, customerId) {
    let response = await axios.post(
      "http://localhost:3000/get-customer-by-id",
      { id: customerId }
    );
    VuexContext.commit("setCurrentCustomer", response.data.currentCustomer);

    return response;
  },

  async deleteCustomerById(VuexContext, customerId) {
    let response = await axios.post(
      "http://localhost:3000/delete-customer-by-id",
      { id: customerId }
    );
    VuexContext.commit("setCustomers", response.data.customers);
    return response;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
