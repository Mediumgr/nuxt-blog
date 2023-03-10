export const state = () => ({
  token: true,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('mock-token')
        }, 2000)
      })
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true }) // { root: true } для обращения в index.js (store)
    }
  },
  createUser({ commit }, data) {
    try {
      console.log('ok', data)
    } catch (e) {}
  },
  setToken({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  },
}

export const getters = {
  isAuthenticated: (state) => !!state.token,
}
