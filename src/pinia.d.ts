import 'pinia'
import type { Router } from 'vue-router'
// import
declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}
