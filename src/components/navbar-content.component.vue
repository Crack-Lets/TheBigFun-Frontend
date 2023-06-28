<template>

  <pv-toolbar class="shadow-3 pt-2 pb-2">

    <template #start>
      <img src="https://cdn.discordapp.com/attachments/1088535056072585349/1116951446114533456/logo.png">
      <h2 class="mt-0 mb-0 pt-0 pb-0">The Big Fun</h2>

    </template>

    <template #center>
      <h3 class="mt-0 mb-0 pt-0 pb-0">{{currentUser.fullname}}</h3>
    </template>


    <template #end>

        <div class="flex-column">
            <router-link v-if="currentUser.role === 'organizer'" v-for="item in organizerItems"
                         :to="item.to" custom v-slot="{navigate, href}" :key="item.label">
                <pv-button class="p-button-text" :href="href" @click="navigate">{{ item.label }}</pv-button>
            </router-link>
            <router-link v-if="currentUser.role === 'attendee'" v-for="item in attendeeItems"
                         :to="item.to" custom v-slot="{navigate, href}" :key="item.label">
                <pv-button class="p-button-text" :href="href" @click="navigate">{{ item.label }}</pv-button>
            </router-link>
            <router-link v-if="!currentUser.authenticated" v-for="item in unauthenticatedItems" :to="item.to" custom v-slot="{navigate, href}" :key="item.label">
                <pv-button class="p-button-text" :href="href" @click="navigate">{{ item.label }}</pv-button>
            </router-link>
            <pv-button v-if="currentUser.authenticated" class="pvb" label="Log out" aria-label="Log out"
                       text @click="logOut" />

        </div>
    </template>

  </pv-toolbar>

</template>

<script>

export default {
    name: "navbar-content",

    data() {
        return {
            organizerItems: [
                {label: "Create Event", to: "/createEvent"},
                {label: "Events", to: "/events"},
                {label: "Home", to: "/home"},
            ],
            attendeeItems: [
                {label: "Home", to: "/home"},
                {label: "Events", to: "/events"},
                {label: "About Us", to: "/aboutUs"},
            ],
            unauthenticatedItems:[
                {label: "About us", to: "/aboutUs"},
                {label: "Sign up", to: "userRegister"},
            ],
            currentUser: {
                authenticated: true,
                role: "",
                fullname: "",
            },
        };
    },
    methods: {
        logOut() {
            this.currentUser = {
                authenticated: false,
                role: "",
                fullname: "",
            };

            this.$router.push("/");
        },

    },
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
