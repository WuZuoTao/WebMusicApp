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
        img{
          width: 85%;
          height: 100%;
        }
    }
</style>