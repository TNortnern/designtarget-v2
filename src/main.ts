// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import devalue from '@nuxt/devalue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'virtual:windi.css'
import './assets/styles/main.scss'
// import ripple from 'vue3-whr-ripple-directive'
import ripple from './vRipple'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    const { app } = ctx
    app.directive('ripple', ripple)
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)
