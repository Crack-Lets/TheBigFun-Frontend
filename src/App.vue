<template>
  <navbar-content></navbar-content>


  <AboutusContentComponent></AboutusContentComponent>




  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import AboutusContentComponent from "@/components/aboutus-content.component.vue";

export default {

  components: {FooterContent, NavbarContent,AboutusContentComponent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

</style>
