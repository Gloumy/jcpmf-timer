import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './registerServiceWorker'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            'light': {
                dark: false,
                colors: {
                    primary: '#86bc25',
                    secondary: '#002d4e',
                    background: '#858b91'
                }
            }

        }
    }
})
app.use(vuetify);

app.mount('#app')
