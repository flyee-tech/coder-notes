import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/article/getList',
    method: 'get',
    params
  })
}
export function getPublicArticleList(params) {
  return request({
    url: '/article/getPublicList',
    method: 'get',
    params
  })
}
export function getArticleListByTag(params) {
  return request({
    url: '/article/getListByTag',
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

export function delArticle(params) {
    return request({
        url: '/article/del',
        method: 'get',
        params
    })
}

export function saveArticle(params) {
    return request({
        url: '/article/save',
        method: 'post',
        data: params
    })
}

export function getTagList(params) {
    return request({
        url: '/tag/getTagList',
        method: 'get',
        params
    })
}
