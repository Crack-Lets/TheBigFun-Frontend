<template>

  <pv-toolbar class="shadow-3 pt-2 pb-2">

    <template #start>
      <img src="src/assets/resources/logo.png">
      <h2 class="mt-0 mb-0 pt-0 pb-0">The Big Fun</h2>

    </template>

    <template #center>
      <h3 class="mt-0 mb-0 pt-0 pb-0">{{currentUser.fullname}}</h3>
    </template>


    <template #end>
<!--      <pv-button class="pvb" label="Home" aria-label="Home" text/>
      <pv-button class="pvb" label="About Us" aria-label="About Us" text/>
      <pv-button class="pvb" label="Events" aria-label="Events" text/>
      <pv-button class="pvb" label="Sign Up" aria-label="Sign Up" text/>
      <pv-button class="pvb" label="Sign In" aria-label="Sign In" severity="danger"/>-->

      <div class="flex-column">
        <router-link v-for="item in items"
                     :to="item.to"
                     custom
                     v-slot="{navigate, href}"
                     :key="item.label">
          <pv-button
              class="p-button-text"
              :href="href"
              @click="navigate">{{ item.label }}</pv-button>
        </router-link>
      </div>

    </template>

  </pv-toolbar>

</template>

<script>
export default {
  name: "navbar-content",

  data() {
    return {
      items: [
        { label: 'Home', to: '/home' },
        { label: 'About Us', to: '/aboutUs' },
        { label: 'Events', to: '/events' },
        { label: 'Sign Up', to: '/userRegister' },
        { label: 'Sign In', to: '/userLogin' },
      ],
      currentUser:{}
    }
  }

}
</script>





<style scoped>

img{
  height: 50px;
}

.pvb{
  margin-left: 10px;
}

pv-toolbar{
  height: 50px;
}


</style>
