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
