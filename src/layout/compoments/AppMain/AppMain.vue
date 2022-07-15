<template>
  <div class="Main">
    <transition>
          <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'AppMain'
}
</script>

<style lang="scss">
    .Main{
        background: #fff;
        overflow-y: scroll;
        img{
          width: 85%;
          height: 100%;
        }
    }
    .Main::-webkit-scrollbar{
      width: 1px;
    }
</style>