<template>
  <div class="content">
    <div class="navigation flex">
      <div class="bold">个性推荐</div>
      <div>专属定制</div>
      <div>歌单</div>
      <div>排行榜</div>
      <div>歌手</div>
      <div>最新音乐</div>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHome'
}
</script>

<style lang="scss">
@import "./index.scss"
</style>