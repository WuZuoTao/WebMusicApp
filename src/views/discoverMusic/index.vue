<template>
  <div class="content">
    <div class="navigation flex">
      <router-link v-for="(item,index) in navigatorList" :to="item.rout ? item.rout : '' " :key="index" >
          <div :class="navigatorBtnClick == index ? 'bold' : '' " @click="navigatorBtnClick = index">{{item.name}}</div>
      </router-link>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppDiscoverMusic',
    data(){
      return{
        navigatorList:[
          {name:'个性推荐',rout:'/discover/recommend'},
          {name:'专属定制',rout:'/discover/customization'},
          {name:'歌单'},
          {name:'排行榜'},
          {name:'歌手'},
          {name:'最新音乐'},
        ],
        navigatorBtnClick:0
      }
    },
    watch:{
      navigatorBtnClick:{
        handler(newVlaue){
          this.navigatorBtnClick = newVlaue
        }
      }
    }
}
</script>

<style lang="scss">
@import "./index.scss"
</style>