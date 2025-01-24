import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      character: {},
    }
  },
  mutations: {
    changeCurrentCharacter(state, characterData) {
      state.character = characterData
    },
  },
})

export default store
