<template>
  <div class="content-area">
    <div class="area">
      <banner />
      <playlist />
    </div>
  </div>
</template>
<script>
import banner from '@/components/banner'
import playlist from '@/components/playlist'
export default {  
    name: 'AppRecommend',
    components:{
      banner,
      playlist
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>