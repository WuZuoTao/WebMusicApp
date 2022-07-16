<template>
<div class="recommendItemContent">
  <div class="recommend-Item-content-font">
    <div class="font-size">
      <span>最新音乐</span>
      <span class="iconfont icon-gengduo"></span>
    </div>
    <div class="item-content">
        <div :class=" index == 0 ? 'margin-left item' : ' item'" v-for="(item,index) in newMusicList" :key="item.id">
          <div class="item-left">
            <img :src="item.picUrl" alt="">
            <div class="iconfont icon-bofangqi-bofang item-icon-left"></div>
          </div>
          <div class="item-right">
            <div class="right-top">
              <div class="topfont">{{item.name}}</div>
              <span class="font-alias">{{item.song.alias[0]}}</span>
            </div>
            <div class="right-bottom">
              <span class="iconfont" v-for="(authorItem,index) in item.song.artists" :key="index">
              {{authorItem.name ? authorItem.name : ''}} {{ index == item.song.artists.length - 1 ? '' : '/' }}</span>
              
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { newmusic } from '@/api/recommend'
export default {
    name:'recommenNewdmusic',
    data(){
      return{
        newMusicList:[]
      }
    },
    mounted(){
        this.newmusicApi()
    },
    methods:{
        newmusicApi(){
            newmusic(' ',{params:{limit:12}}).then(res => {
                res.result.forEach(item => {
                  return item.song.alias[0] ? item.song.alias[0] = '（'+ item.song.alias[0] + '）': ' '
                })
                this.newMusicList = res.result
                console.log(res.result)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>