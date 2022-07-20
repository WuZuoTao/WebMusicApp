<template>
  <div class="content-area">
    <div class="area">
      <!-- 轮播图组件 -->
      <banner />
      <!-- 推荐歌单组件 -->
      <playlist />
      <!-- 独家放送组件   -->
      <exclusive />
      <!-- 最新音乐组件 -->
      <newestmusic />
      <!-- 推荐MV组件 -->
      <recmmv />
    </div>
  </div>
</template>
<script>
import banner from '@/components/banner'
import playlist from '@/components/playlist'
import exclusive from '@/components/exclusive'
import newestmusic from '@/components/newestmusic'
import recmmv from '@/components/recmmv'
export default {  
    name: 'discoverMusicRecommend',
    components:{
      banner,
      playlist,
      exclusive,
      newestmusic,
      recmmv
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>