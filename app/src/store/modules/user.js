import axios from '@/axios'
import router from '@/router'

export default {
  state: {
    loggedIn: false
  },
  getters: {
    loggedIn: state => state.loggedIn
  },
  mutations: {
    LOGIN_USER: state => {
      state.loggedIn = true
    },
    LOGOUT_USER: state => {
      state.loggedIn = false
    }
  },
  actions: {
    register: async ({dispatch}, _user) => {
      await axios.post('users/register', _user)
      const user = {
        email: _user.email,
        password: _user.password
      }
      dispatch('login', user)
    },
    login: ({commit}, {user, route}) => {
      axios.post('users/login', user)
      .then(res => {
        if(res.status === 200) {
          commit('LOGIN_USER')

          if(route) {
            router.push(route)
          } else {
            router.push('/')
          }
        }
      })
    },
    logout: ({commit}) => {
      commit('LOGOUT_USER')
    }
  }
}