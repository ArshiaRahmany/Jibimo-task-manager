import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Trello from './modules/Trello-store'

const TrelloStore = createStore({
  modules: {
    Trello
  },
  plugins: [createPersistedState()],
})

export default TrelloStore