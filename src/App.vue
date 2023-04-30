<template>
    <div><navbar-content></navbar-content></div>
    <div><home-content></home-content></div>
    <div><footer-content class="footer"></footer-content></div>









</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import HomeContent from "./components/home-content.component.vue"


export default {
  components: {HomeContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  position: absolute;
  bottom: 0px;
  width: 100%;

}

</style>
