import axios from 'axios'

export default {
  state: {
    products: [],
    product: null
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    },
    CLEANUP: state => {
      state.product = null
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:8081/api/run/products')
      commit('SET_PRODUCTS', res.data)
    },
    getOneProduct: async ({commit}, id) => {
      console.log(commit)
      const res = await axios.get('http://localhost:8081/api/run/products/' + id)
      commit('SET_PRODUCT', res.data)
    },
    cleanup: ({commit}) => {
      commit('CLEANUP')
    }
  }
}