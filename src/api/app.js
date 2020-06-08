import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/article/getList',
    method: 'get',
    params
  })
}
