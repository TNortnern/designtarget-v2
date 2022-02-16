import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_API_LOCAL_URL || 'https://designtarget-v2-api.onrender.com/api',
})
