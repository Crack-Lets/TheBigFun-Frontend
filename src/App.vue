<template>
  <navbar-content></navbar-content>
  <attendancelist-content></attendancelist-content>
  <footer-content class="footer"></footer-content>
</template>


<script>
import NavbarContent from "./components/navbar-content.component.vue";
import FooterContent from "./components/footer-content.component.vue";
import AttendancelistContent from "@/components/attendancelist-content.component.vue";
export default {
  components: {AttendancelistContent, FooterContent, NavbarContent}
}
</script>





<style scoped>

.footer{
  bottom: 0px;
  width: 100%;

}

</style>
