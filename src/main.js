import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import TrelloStore from './store/index.js'

const app = createApp(App)
app.use(TrelloStore)
app.mount('#app')
