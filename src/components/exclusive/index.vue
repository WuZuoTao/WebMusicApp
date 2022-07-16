<template>
<div class="recommendItemContent">
  <div class="recommend-Item-content-font">
    <div class="font-size">
      <span>独家放送</span>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div class="item">
      <div :class="index == 0 ? 'item-content mrgin-left-0' : 'item-content' " v-for="(item,index) in itemList" :key="item.id">
        <div class="item-img">
          <img :src="item.sPicUrl" alt="">
          <div class="iconfont icon-bofangqi-bofang item-icon"></div>
        </div>
        <div class="item-font">
          {{item.name}}
        </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import { exclusive } from '@/api/recommend'
export default {
    name:'recommendExclusive',
    data() {
      return {
        itemList:[]
      }
    },
    mounted(){
      this.exclusiveApi()
    },
    methods:{
      exclusiveApi(){
        exclusive().then(res => {
          this.itemList = res.result
        })
      }
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>