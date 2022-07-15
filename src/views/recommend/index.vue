<template>
  <div class="content-area">
    <div class="area">
      <banner />
    </div>
  </div>
</template>
<script>
import banner from '@/components/banner'
export default {  
    name: 'AppRecommend',
    components:{
      banner
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>