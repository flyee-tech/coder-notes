import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/article/getList',
    method: 'get',
    params
  })
}
export function getArticleDetail(params) {
    return request({
        url: '/article/getDetail',
        method: 'get',
        params
    })
}
