<template>
  <navbar-content></navbar-content>

  <div class="content">
    <router-view></router-view>
  </div>





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

.content{
  display: flex;
  align-items: center;
  justify-content: center;
  height:80vh;
}


</style>
