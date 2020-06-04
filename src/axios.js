import axios from 'axios'
import apiconfigs from './configs/api.json'

const instance = axios.create({
  baseURL: apiconfigs.mynodejs.host
})

instance.defaults.headers['Content-Type'] = 'application/json'
instance.defaults.headers['Access-Control-Allow-Origin'] = '*'

instance.interceptors.request.use(request => {
  console.log('axios request: ', request)
  return request
}, error => {
  console.log('axios error in request: ', error)
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log('axios response: ', response)
  const responseObject = {
    data: response.data,
    statusCode: response.status,
    responseText: response.statusText
  }
  return responseObject
}, error => {
  console.log('axios error in response: ', error)
  return Promise.reject(error)
})

export default instance
