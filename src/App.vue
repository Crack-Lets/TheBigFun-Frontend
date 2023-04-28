<template>
  <navbar-content></navbar-content>



  <userregister-content-component></userregister-content-component>




  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import UserregisterContentComponent from "@/components/userregister-content-component.vue";
export default {
  components: {FooterContent, NavbarContent,UserregisterContentComponent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

</style>
