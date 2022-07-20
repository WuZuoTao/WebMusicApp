<template>
  <div class="NavBar">
    <router-link 
    active-class="ative"
    v-for="(item,index) in navbarList" 
    :key="index"
    :to=" item.rout ? item.rout : '/discover/recommend'"
    > 
      <div  
      :class=" navbarClick == index  ? 'navbar-font navBarItem' : 'navBarItem'" v-if="!item.title"
      @click="navbarClick = index">
       {{item.name}}
      </div>
      <p v-else>{{item.name}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
    name:'AppNavBar',
    data(){
      return{
        navbarList:[
          {
            name:'发现音乐',
            rout:'/discover/recommend'
          },
          {
            name:'博客',
            rout:'/bokein'
          },
          {
            name:'视频',
            rout:'/discover/recommend'
          },
          {name:'关注'},
          {name:'直播'},
          {name:'私人FM'},
          {name:'我的音乐', title:1},
          {name:'本地与下载'},
          {name:'最近播放'},
          {name:'我的音乐云盘'},
          {name:'我的博客'},
          {name:'我的收藏'},
          {name:'创建的歌单',title:1},
          {name:'我的收藏'},
          {name:'我喜欢的音乐'},
          {name:'哎'},
        ],
        navbarClick:0
      }
    },
    mounted(){
    },
    methods:{
    },
    watch:{
      navbarClick:{
        handler(newValue){
          this.navbarClick = newValue
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import './AppNavBar.scss'
</style>