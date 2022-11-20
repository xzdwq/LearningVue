import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: () => ({
    load: false,
    cards: [],
    inputValue: 'Input value'
  }),
  getters: {
    getCards(state) {
      return state.cards
    },
    getLoad(state) {
      return state.load
    }
  },
  mutations: {
    setIsLoading(state, load) {
      state.load = load
    },
    setInputValue(state, value) {
      state.inputValue = value;
    },
    setCards(state, data) {
      state.cards = data
    }
  },
  actions: {
    async fetchCards({ commit }) {
      // if (!state.cards.length) {
        commit('setIsLoading', true)
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        commit('setCards', data.data)
        setTimeout(() => { commit('setIsLoading', false) }, 3000)
      // }
    }
  }
})
