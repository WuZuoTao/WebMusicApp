<template>
  <div class="content-area">
    <div class="area">
      <banner />
      <playlist />
      <exclusive />
      <newestmusic />
    </div>
  </div>
</template>
<script>
import banner from '@/components/banner'
import playlist from '@/components/playlist'
import exclusive from '@/components/exclusive'
import newestmusic from '@/components/newestmusic'
export default {  
    name: 'AppRecommend',
    components:{
      banner,
      playlist,
      exclusive,
      newestmusic
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>