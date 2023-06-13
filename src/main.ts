import { createApp } from "vue"
import { createPinia } from "pinia"
import persistedstate from "pinia-plugin-persistedstate"

import App from "./App.vue"
import router from "./router"

import "./assets/css/normalize.css"
import "uno.css"

const pinia = createPinia()

pinia.use(persistedstate)

const app = createApp(App)
app.use(pinia)

app.use(router)

app.mount("#app")
