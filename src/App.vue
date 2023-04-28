<template>
  <navbar-content></navbar-content>


  <organizereventlist-content-component></organizereventlist-content-component>





  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import OrganizereventlistContentComponent from "@/components/organizereventlist-content.component.vue";

export default {
  components: {FooterContent, NavbarContent,OrganizereventlistContentComponent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

</style>
