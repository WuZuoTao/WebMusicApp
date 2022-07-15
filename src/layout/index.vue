<template>
  <div class="Appindex">
    <app-header />
    <div class="Appcenter">
        <app-nav-bar class="navbar" />
        <app-main class="main">
            <router-view></router-view>
        </app-main>
    </div>
    <app-bootom  />
  </div>
</template> 

<script>
import AppBootom from './compoments/AppBootom/AppBootom.vue'
import AppHeader from './compoments/AppHeader/AppHeader.vue'
import AppNavBar from './compoments/AppNavBar/AppNavBar.vue'
import AppMain from './compoments/AppMain/AppMain.vue'

export default {
    name: 'AppIndex',
    components: {
        AppBootom,
        AppMain,
        AppHeader,
        AppNavBar
    }
}
</script>

<style lang="scss">
    .Appindex{
    display: flex;
    height: 100vh;
    flex-direction: column;
        .Appcenter{
            flex: 1;
            display: flex;
            min-height: 420px;
            .navbar{
                width: 200px;
            }
            .main{
                flex: 1;
            }
        }
    }
 
</style>