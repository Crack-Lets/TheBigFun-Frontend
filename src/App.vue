<template>
    <div> <navbar-content></navbar-content></div>
    <div><footer-content class="footer"></footer-content></div>








</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import UserprofileContent from "@/components/userprofile-content.component.vue";
export default {
  components: {UserprofileContent, FooterContent, NavbarContent}
}
</script>

<style scoped>

.footer{


  width: 100%;

}

</style>
