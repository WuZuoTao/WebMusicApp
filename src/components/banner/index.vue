<template>
    <div class="area-banner">
      <div class="banner">
        <!-- 左右图标 -->
      <div class="iconfont icon-houtui icon iconleft" @click="itemcent--"></div>
      <div class="iconfont icon-qianjin icon iconright" @click="itemcent++"></div>
      <!-- 轮播图片 -->
       <div 
       class="banne-item"
       v-for="item in banner" 
       :key="item.encodeId"
       >
         <img :src="item.imageUrl" alt="" />
       </div>
      </div>
      <!-- 下面小圆圈 -->
      <div class="iconround">
        <div 
        @mouseover="itemcent = index"
        :class="itemcent == index ? 'rounditemcolor rounditem': 'rounditem'" v-for="(item,index) in banner " 
        :key="index"
        ></div>
      </div>
    </div>
</template>

<script>
import {carousel} from '@/api/recommend.js'
export default {  
    name: 'recommendBanner',
    data() {
      return {
        banner:null,
        itemcent:0,  //初始化展示中间图片
        rounditem:null,  // 初始化圆圈的位子
        bannerTime:null   // 初始化一个定时器
      }
    },
    mounted(){
      // api请求
      carousel({type:0}).then(res => {
        this.banner = res.banners
        // api请求为异步，在里面执行不容易出错(在函数执行的时候还没有拿到数据)
        this.bannerRoll()
      })
      //  定时器 实现图片滚动
      this.bannerTime = setInterval(() => {
        this.itemcent ++
      },5000)
    }, 
    methods:{
      //  上一张下一张的逻辑
      bannerRoll(){
        let itemcent = this.itemcent
        let itemleft
        let itemright
        // if(itemcent + 1 > this.banner.length -1){
        //   itemright = 0
        // }else{
        //   itemright = itemcent + 1
        // }
        // if(itemcent - 1 < 0 ){
        //   itemleft = this.banner.length - 1
        // }else{
        //   itemleft = itemcent - 1
        // }
        itemcent + 1 > this.banner.length -1 ? itemright = 0 : itemright = itemcent + 1
        itemcent - 1 < 0 ? itemleft = this.banner.length - 1 : itemleft = itemcent - 1
        this.$nextTick(function(){
          let item = document.getElementsByClassName('banne-item')
          for(let i = 0 ; i < item.length ; i++){
            item[i].setAttribute('class','banne-item')
          }
          item[itemcent].setAttribute('class','banne-cente banne-item')
          item[itemleft].setAttribute('class','banne-left banne-item')
          item[itemright].setAttribute('class','banne-right banne-item')
        })
      }
    },
    watch:{
        //  监听属性，只要改变就去执行函数。
        itemcent:{
          handler(newValue){
            // 三元运算符  用一个if直接解决
            if(newValue < 0 || newValue > this.banner.length - 1){
              newValue < 0 ? newValue = this.banner.length - 1 : newValue = 0
            }
            this.itemcent = newValue
            this.bannerRoll()
          }
        }
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>