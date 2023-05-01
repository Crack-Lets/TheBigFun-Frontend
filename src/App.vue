<template>
  <navbar-content class="navbar"></navbar-content>

  <router-view></router-view>



  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";


export default {
  components: { FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

.navbar{
  margin-bottom: 50px;
}

</style>
