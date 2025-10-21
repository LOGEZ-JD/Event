import axios from 'axios'

const api = axios.create({
  baseURL: '/api', // use Vite proxy or change to http://localhost:4000
  headers: { 'Content-Type': 'application/json' }
})

export default api
