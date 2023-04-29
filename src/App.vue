<template>
    <div><navbar-content></navbar-content></div>
    <div><buy-tickets-content></buy-tickets-content></div>
    <div><footer-content class="footer"></footer-content></div>










</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import BuyTicketsContent from "@/components/buytickets-content.component.vue";

export default {
  components: {BuyTicketsContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  bottom: 0px;
  width: 100%;

}

</style>
