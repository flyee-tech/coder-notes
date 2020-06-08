import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getCookies } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    /* if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getCookies('token')
    } */
    if (config.params === undefined) {
      config.params = { 'token': getCookies('token') }
    } else {
      config.params.token = getCookies('token') || ''
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      if (res.code === 400) {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        res.list = []
        res.total = 0
        res.totalCount = 0
        this.$router.push('/login')
      } else if (res.code === 418) {
        Message({
          message: '',
          type: 'error',
          duration: 5 * 1000
        })
        MessageBox.confirm('您的登录信息已过期，请退出后重新登录', '确认退出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('user/logout').then(() => {
            location.reload()
          }).catch(() => {
            // this.loading = false
          })
        })
      } else {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
