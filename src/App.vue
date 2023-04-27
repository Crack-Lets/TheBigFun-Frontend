<template>
    <div>
        <navbar-content></navbar-content>
        <br>
        <faq-content></faq-content>
        <br>
        <footer-content class="footer"></footer-content>
    </div>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import FaqContent from "@/components/faq-content.component.vue";
export default {
  components: {FaqContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{

  bottom: 0px;
  width: 100%;
}

</style>
