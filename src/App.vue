<template>

  <navbar-content></navbar-content>



 <userlogin-content-component></userlogin-content-component>




  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import UserloginContentComponent from "@/components/userlogin-content.component.vue";
export default {
  components: {FooterContent, NavbarContent,UserloginContentComponent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

</style>
