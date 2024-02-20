
const state = {
  Trello: null
}

const getters = {
  getTrelloDatas(state) {
    return state.Trello
  }
}

const actions = {
  setTrello({ commit }, data) {
    commit('SET_Trello', data)
  }
}

const mutations = {
  SET_Trello(state, data) {
    state.Trello = data
  }
}

const TrelloModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default TrelloModule