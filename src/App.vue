<template>
    <div><navbar-content></navbar-content></div>
    <div><update-profile-content></update-profile-content></div>
    <div><footer-content class="footer"></footer-content></div>










</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import UpdateProfileContent from "@/components/updateprofile-content.component.vue";
export default {
  components: {UpdateProfileContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  position: absolute;

  width: 100%;

}

</style>
