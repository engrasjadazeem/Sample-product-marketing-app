import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      data: {}
    },
    getters: {
      getData: state => state.data,
      getPhoneById: state => id => {
        if (state.data && state.data.phones) {
          return state.data.phones.find(function(phone) {
            return phone.id == id
          })
        }
      }
    },
    mutations: {},
    actions: {
      getPhones({ commit, state }) {
        if (Object.keys(state.data).length === 0) {
          axios
            .get(
              'https://my-json-server.typicode.com/engrasjadazeem/mock-data/db'
              //'http://localhost:3000/products'
            )
            .then(response => {
              console.log(response);
              if (response && response.data && response.data.products) {
                state.data = response.data.products
              }
            })
        }
      }
    }
  })

export default store
