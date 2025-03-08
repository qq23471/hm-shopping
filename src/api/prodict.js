import request from '@/utils/request'

export const getProList = (obj) => {
  return request.get('/goods/list', {
    params: {
      categoryId: obj.categoryId,
      goodsName: obj.goodsName,
      page: obj.page,
      sortType: obj.sortType,
      sortPrice: obj.sortPrice
    }
  })
}

// 获取商品详情
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

// 获取商品评论
export const getProComment = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
