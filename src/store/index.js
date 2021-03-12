import Vue from 'vue'
import Vuex from 'vuex'
import Customers from './modules/customres'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      Customers
    },
  })