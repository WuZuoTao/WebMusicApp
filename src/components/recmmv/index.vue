<template>
<div class="recommendItemContent">
  <div class="recommend-Item-content-font">
    <div class="font-size">
      <span>推荐MV</span>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div class="recmmv">
        <div class="recmmv-item" v-for="item in recmmvList" :key="item.id">
            <div class="recmmv-item-img">
                <img :src="item.picUrl" alt="">
                <div class="recmmv-item-icon">
                    <span class="iconfont icon-24gl-play icon-bof"></span>
                    <span>{{item.playCount}}</span>
                </div>
            </div>
            <div >
                <div class="recmmv-item-title">{{item.name}}</div>
            </div>
            <div >
                <div class="recmmv-item-name">{{item.artistName}}</div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import { numberCount } from '@/style/index'
import { recmmv } from '@/api/recommend'
export default {
    name: 'recommendMv',
    data(){
        return{
            recmmvList:[]
        }
    },
    mounted(){
        this.recmmvApi()
    },
    methods:{
        recmmvApi(){
            recmmv().then(res => {
                this.recmmvList = res.result.slice(0,3)
                 this.recmmvList.forEach(item => {
                    item.playCount =  numberCount(item.playCount)
                })
            })
        }   
    }
}
</script>

<style lang="scss" scoped>
    @import './index.scss'
</style>