// register vue composition api globally
import { ViteSSG } from 'vite-ssg'
import devalue from '@nuxt/devalue'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import 'virtual:windi.css'
import './assets/styles/main.scss'
// import ripple from 'vue3-whr-ripple-directive'
// import ripple from './vRipple'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to) {
      if (to.path.includes('collection')) {
        // let page render firt
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }, 300)
        })
      }
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
              el: to.hash,
              // offset has to be set as left and top at the top level
              // left: 0,
              // top: 0,
              behavior: 'smooth',
            })
          }, 300)
        })
      }
    },
  },
  (ctx) => {
    // const { app } = ctx
    // app.directive('ripple', ripple)
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
  {
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
)
