import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import api from '~/api'
interface User {
  email: string
  favorites: any
}
interface StrapiEntity {
  id: string
  attributes: any
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
  user: User | null
  errors: StrapiExposedAuthError[] | string
}
export const useAuthStore = defineStore({
  id: 'auth',
  state: (): RootState => ({
    loading: false,
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
        cookies.set('auth_token', data.jwt)
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
        this.user = data.user
        const cookies = useCookies()
        cookies.set('auth_token', data.jwt)
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
  },
})
