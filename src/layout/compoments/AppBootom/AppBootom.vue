<template>
  <div class="Bottom">
    <!-- 左边歌曲信息区域 -->
    <div class="Bottom-Left">
      <!-- 图片 -->
      <div class="left-img">
        <img src="../../../style/图片/z24.jpg" alt="">
      </div>
      <!-- 歌手，歌曲信息 -->
      <div class="left-message">
        <div class="message">
          <div class="message-z">
            <span>海阔天空</span>
            <span> (Boundless Ocans Vast) </span>
          </div>
          <!-- 爱心 -->
          <div class="iconfont icon-kongxin icon"></div>
        </div>
        <div>Beyond</div>
      </div>
    </div>
    <div class="Bottom-center">
      <!-- icon图标区域 -->
      <div class="center-top">
        <div class="iconfont icon--lbxh state"></div>
        <div class="iconfont icon-shangyishouweidianji"></div>
        <div class="iconfont icon-bofangqi-bofang play"></div>
        <div class="iconfont icon-xiayishouweidianji"></div>
        <div class="">词</div>
      </div>
      <!-- 时间轴 -->
      <div class="center-bottom">
        <!-- 开始时间 -->
        <div>00:00</div>
        <!-- 进度条底图 -->
        <div class="progress-bar">
          <!-- 时时进度条  -->
          <div></div>
        </div>
        <!-- 结束时间 -->
        <div>00:00</div>
      </div>
    </div>
    <div class="Bottom-right">
      <div class="">标准</div>
      <!-- 音效 -->
      <div class="iconfont icon-shengyinkai"></div>
      <!-- 声音 -->
      <div class="iconfont icon-shengyinkai"></div>
      <!-- 一起听 -->
      <div class="iconfont icon-haoyou"></div>
      <!-- 更多 -->
      <div class="iconfont icon-gengduo1"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppBootom'
}
</script>

<style lang="scss">
  @import './AppBootom.scss'
</style>