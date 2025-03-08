<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="sortShopping('all')">综合</div>
      <div class="sort-item" @click="sortShopping('sales')">销量</div>
      <div class="sort-item" @click="sortShopping('price')">价格</div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/prodict'
export default {
  name: 'SearchIndex',
  components: {
    GoodsItem
  },
  computed: {
    querySearch () {
      return this.$route.params.search
    }
  },
  data () {
    return {
      proList: [],
      page: 1,
      sortType: 'all',
      sortPrice: 0
    }
  },
  created () {
    this.getProList()
  },
  methods: {
    async getProList () {
      const { data: { list } } = await getProList({
        categoryId: this.$route.query.categoryId,
        goodsName: this.querySearch,
        page: this.page,
        sortType: this.sortType,
        sortPrice: this.sortType === 'price' ? this.sortPrice : null
      })
      this.proList = list.data
    },
    sortShopping (sortType) {
      this.sortType = sortType
      if (this.sortType === 'price') {
        this.sortPrice = this.sortPrice === 0 ? -1 : 0
      }
      this.getProList()
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}
// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
