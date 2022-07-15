<template>
  <div class="headerTop">
    <!--  logo -->
    <div class="headerTop-logo">
        <span class="iconfont icon-wangyiyunyinle logo"></span>
        <span class="logosize">网易云音乐</span>
    </div>
     <!-- 左侧 -->
    <div class="headerTop-left">
        <div class="iconfont icon-houtui page previous"></div>
        <div class="iconfont icon-qianjin page next"></div>
        <div class="serchInput">
            <span class="iconfont icon-sousuo serchlogo"></span>
            <el-input placeholder="请输入超出长度应该会让他吟唱一下" />
        </div>
        <div class="iconfont icon-maikefeng1 voice page"></div>
    </div>
    <!--  右侧 -->
    <div class="headerTop-right">
        <!-- 头像,昵称，VIP -->
        <div class="headerName_img_Vip">
            <div class="headerImg"><img src="../../../style/图片/z24.jpg" alt=""></div>
            <div class="headerName">
                 <span>如果可以2013</span>
                 <span class="iconfont icon-xiala"></span>
            </div>
            <div class="headerVip"><img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4357872480/66ee/6807/a53f/715860bc3c2f229a123c2c69eacd2eea.png" alt=""></div>
        </div>
        <!--换肤 -->
        <div class="iconfont icon-pifu"></div>
        <!-- 设置 -->
        <div class="iconfont icon-shezhi"></div>
        <!-- 邮箱 -->
        <div class="iconfont icon-youxiang email"></div>
        <!-- 分割 -->
        <div class="cut-off-rule"></div>
        <!-- 迷你模式 -->
        <div class="iconfont icon-CZ_028"></div>
        <!-- 最小化 -->
        <div class="iconfont icon-suoxiao"></div>
        <!-- 全屏 -->
        <div class="iconfont icon-zuidahuaxi"></div>
        <!-- 关闭 -->
        <div class="iconfont icon-guanbi x"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>
<style lang="scss">
@import './AppHeader.scss'
</style>