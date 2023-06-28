<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card" >

        <pv-scrollpanel style="width: 100%; height: 570px">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img alt="user header" src="https://cdn.discordapp.com/attachments/1088535056072585349/1116951446114533456/logo.png" />
                </p>

                <pv-divider layout="vertical" />

                <div class="info textos">

                    <div class="flex flex-column gap-2">
                        <label for="username" class="title" >Username</label>
                        <pv-inputext type="text" class="container" id="username" v-model="user.userName" aria-describedby="username-help" />
                        <small id="username-help" class="espacio">Enter your username.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="password" class="title">Password</label>
                        <pv-inputext  type="text" class="container" id="password" v-model="user.password" toggleMask aria-describedby="password-help" />
                        <small id="password-help" class="espacio">Enter your password.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="fullname" class="title">Name</label>
                        <pv-inputext type="text" class="container" id="name" v-model="user.name" aria-describedby="name-help" />
                        <small id="name-help" class="espacio">Enter your name.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="email" class="title">Email</label>
                        <pv-inputext type="text" class="container" id="email" v-model="user.email" aria-describedby="email-help" />
                        <small id="email-help" class="espacio">Enter your email.</small>
                    </div>

                  <div class="card flex justify-content-center">
                    <pv-dropdown v-model="selectedUser" :options="typeUser" optionLabel="name" placeholder="Select Type of User" class="w-full md:w-14rem" />
                  </div>

                  <div class="button-container flex align-items-center justify-content-center" >
                    <pv-button type="submit" :disabled="isDisabled" class="justify-content-center" label="Sign up" @click="saveUser" style="width: 153px; height: 50px; border-radius: 25px;"/>
                  </div>

                </div>

            </div>
        </pv-scrollpanel>
    </div>

</template>

<script>
import {UsersApiService} from "../thebigfun/services/users-api.service";
import Dropdown from "primevue/dropdown";

export default {
  name: "userregister-content-component",
  components: {Dropdown},

  data() {
    return {

      user: {},
      currentUser: {},
      usersApi: new UsersApiService(),
      errors:[],
      //isDisabled:true,
      selectedUser: null,
      typeUser: [
        { name: 'Attendee', code: 'UA' },
        { name: 'Organizer', code: 'UO' },
      ]
    }
  },

  created() {
    console.log("primero", this.user.fullname);

  },

  methods: {
    saveUser() {
      console.log(this.user);
      if(this.selectedUser.code==='UA'){
        this.usersApi.createAttendee(this.user)
            .then(response => {
              this.currentUser = response.data;
              const userId = this.currentUser.id;

              /*console.log("currentAttendee:", this.currentUser);
              console.log("userID:", userId);
              localStorage.setItem('userId', userId);*/

              this.user = {};
            })
            .catch(e => {
              console.log(e);
              this.errors.push(e);
              alert("Error to create Attendee User")
            });
      }else {
        this.usersApi.createOrganizers(this.user)
            .then(response => {
              this.currentUser = response.data;
              const userId = this.currentUser.id;

              /*console.log("currentUser:", this.currentUser);
              console.log("userID:", userId);
              localStorage.setItem('userId', userId);*/
              this.user = {};
              this.$router.push("/");
            })
            .catch(e => {
              console.log(e);
              this.errors.push(e);
              alert("Error to create Organizer User")
            });
      }

    }

  },

  computed:{
    isDisabled(){
      if(this.user.name===undefined || this.user.userName===undefined || this.user.password===undefined|| this.user.email===undefined) {
        return true;
      }
      else {
        return false;
      }
    }
  }






}


</script>

<style scoped>


.arriba{
}

.espacio{
    margin-bottom:20px;
}

.textos{
    font-family: "Nunito", sans-serif;
}

.title{
    text-align: left;
    color: rgba(83, 16, 92, 1);
    font-size:20px;
}

.container {
    width: 500px;
    height: 50px;
    border: 1px solid #53105c;
    border-radius: 10px;
    text-align: justify;
    background: #ffffff;
    margin-left:30px;
    font-family: "Nunito", sans-serif;
}

.uptButton {
    width: 355px;
    height: 80px;
    color: #ffffff;
    border-radius: 50px;
    background-color: white;
    border: 1px solid #53105c;
}

.info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
}
.button-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 70px;
}


@media screen and (max-width: 768px) {

    .container {
        width: 90%;
    }
}

.card{
  margin-bottom: 50px;
}

</style>
