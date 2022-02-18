import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import type { Resource } from './root'
import api from '~/api'
import { JWT } from '~/constants'

interface Favorite {
  id: number
  resource: Resource
}
interface User {
  id: number
  email: string
  favorites: Favorite[]
}
export interface StrapiExposedAuthError {
  message: string
  name: string
  path: any
}
interface StrapiAuthErrorDetail {
  errors: StrapiExposedAuthError[]
}
interface StrapiAuthError {
  details: StrapiAuthErrorDetail
  message: string
  name: string
  status: number
}
interface StrapiAuthErrorResponse {
  error: StrapiAuthError
}
interface RootState {
  loading: boolean
  resolved: boolean
  user: User | null
  errors: StrapiExposedAuthError[] | string
}
export const useAuthStore = defineStore({
  id: 'auth',
  state: (): RootState => ({
    loading: false,
    resolved: false,
    user: null,
    errors: [],
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.user
    },
  },
  actions: {
    toggleLoading() {
      this.loading = !this.loading
    },
    async login(form: { identifier: string; password: string }) {
      this.errors = []
      this.toggleLoading()
      try {
        const { data }: AxiosResponse<{ user: User; jwt: string }> = await api.post('/auth/local', form)
        this.user = data.user
        const cookies = useCookies()
        cookies.set(JWT, data.jwt)
      }
      catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const strapiErrorResponse = (error.response.data as StrapiAuthErrorResponse)
          this.errors = strapiErrorResponse.error.details.errors || strapiErrorResponse.error.message
        }
      }
      finally {
        this.toggleLoading()
      }
    },
    async signup(form: { identifier: string; password: string }) {
      this.errors = []
      this.toggleLoading()
      try {
        const { data }: AxiosResponse<{ user: User; jwt: string }> = await api.post('/auth/local/register', { ...form, email: form.identifier, username: new Date().toString() })
        this.user = { ...data.user, favorites: [] }
        const cookies = useCookies()
        cookies.set(JWT, data.jwt)
      }
      catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const strapiErrorResponse = (error.response.data as StrapiAuthErrorResponse)
          this.errors = strapiErrorResponse.error.details?.errors || strapiErrorResponse.error.message
        }
      }
      finally {
        this.toggleLoading()
      }
    },
    async me() {
      this.toggleLoading()
      const cookies = useCookies()
      const authToken = cookies.get(JWT)
      if (!authToken) {
        this.resolved = true
        this.loading = false
        return
      }
      try {
        const { data }: AxiosResponse<User> = await api.get('/users/me')
        this.user = data
      }
      catch (error) {
        console.error('error', error)
      }
      finally {
        this.resolved = true
        this.toggleLoading()
      }
    },
    logout() {
      this.user = null
      const cookies = useCookies()
      cookies.remove(JWT)
    },
  },
})
