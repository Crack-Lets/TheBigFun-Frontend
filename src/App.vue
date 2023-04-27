<template>
    <navbar-content></navbar-content>
    <paymentconfirmation-content></paymentconfirmation-content>
    <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import PaymentconfirmationContent from "@/components/paymentconfirmation-content.component.vue";
export default {
  components: {PaymentconfirmationContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  bottom: 0px;
  width: 100%;

}

</style>
