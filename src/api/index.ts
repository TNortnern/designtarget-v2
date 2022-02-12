import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:1340/api',
})
