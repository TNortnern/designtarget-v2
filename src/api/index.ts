import { useCookies } from '@vueuse/integrations/useCookies'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { JWT } from '~/constants'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_LOCAL_URL || 'https://designtarget-v2-api.onrender.com/api',
})
api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config?.headers) {
    const cookies = useCookies()
    const authToken = cookies.get(JWT)
    if (authToken)
      config.headers.Authorization = `Bearer ${authToken}`
  }

  return config
})
export default api
