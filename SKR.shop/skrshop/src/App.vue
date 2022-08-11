<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import Nav from './components/home/Nav.vue'
import FooterNav from './components/home/FooterNav.vue'

export default {
  name: "App",
  components: {
    Nav,
    FooterNav
  },
  data(){
    return {
      
    }
  }
};
</script>
<style lang="scss">
body{
  margin: 0;
}
</style>
