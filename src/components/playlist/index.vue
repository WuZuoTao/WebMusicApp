<template>
  <div class="playlistConten">
    <div class="playlistsize ">
      <span class="f-w">推荐歌单</span>
      <span class="iconfont icon-gengduo icon-f-w"></span>
    </div>
    <div class="playlistconcen">
      <div :class=" index == 0 || index == 5 ? 'playlistitem mg-0':  'playlistitem' " v-for="(item,index) in playList" :key="item.id">
        <div class="itemimg">
          <img :src="item.picUrl" alt="">
          <div class="icon-number">
            <span class="iconfont icon-24gl-play playitemicon"></span>
            <span>{{item.playCount}}</span>
          </div>
          <span class="iconfont icon-bofangqi-bofang iconplay"></span>
        </div>
        <div class="itemfont">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { playlist } from '@/api/recommend'
export default {
    name:'recommendPlayList',
    data() {
      return {
        playList:[]
      }
    },
    mounted(){
      this.playlistApi()
    },
    methods:{
      playlistApi(){
        playlist('',{limit:10}).then(res => {
          this.playList = res.result.slice(0,10)
          this.playList.forEach((item) => {

            if(item.playCount > 10000 || item.playCount > 100000000){
              return item.playCount  = item.playCount > 10000 ? Math.floor(item.playCount / 10000)  +'万' : Math.floor(item.playCount / 100000000) + '亿'
            }
          })
        })
      }
    }
}
</script>

<style lang="scss">
@import "./index.scss"
</style>