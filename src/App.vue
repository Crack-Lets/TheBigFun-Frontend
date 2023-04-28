<template>
    <navbar-content></navbar-content>
    <registerevent-content></registerevent-content>
    <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import RegistereventContent from "@/components/registerevent-content.component.vue";
export default {
  components: {RegistereventContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  bottom: 0px;
  width: 100%;

}

</style>
