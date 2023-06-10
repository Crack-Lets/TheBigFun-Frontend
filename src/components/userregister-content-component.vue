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
                        <pv-inputext type="text" class="container" id="username" v-model="user.username" aria-describedby="username-help" />
                        <small id="username-help" class="espacio">Enter your username.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="password" class="title">Password</label>
                        <pv-inputext  type="text" class="container" id="password" v-model="user.password" toggleMask aria-describedby="password-help" />
                        <small id="password-help" class="espacio">Enter your password.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="fullname" class="title">Name</label>
                        <pv-inputext type="text" class="container" id="name" v-model="user.fullname" aria-describedby="name-help" />
                        <small id="name-help" class="espacio">Enter your name.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="email" class="title">Email</label>
                        <pv-inputext type="text" class="container" id="email" v-model="user.email" aria-describedby="email-help" />
                        <small id="email-help" class="espacio">Enter your email.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="doc" class="title">DNI</label>
                        <pv-inputext type="text" class="container" id="dni" v-model="user.doc" aria-describedby="dni-help" />
                        <small id="dni-help" class="espacio">Enter your DNI.</small>
                    </div>


                  <div class="button-container flex align-items-center justify-content-center" >
                    <pv-button type="submit" :disabled="isDisabled" class="justify-content-center" label="Sign up" @click="saveUser" style="width: 153px; height: 50px; border-radius: 25px;"/>
                  </div>

<!--                    <router-link :to="{name:'home',params:{abcd:4}}" class="button-container flex align-items-center justify-content-center" >
                        <pv-button type="submit" :disabled="isDisabled" class="justify-content-center" label="Registrarse" @click="saveUser" style="width: 153px; height: 50px; border-radius: 25px;"/>
                    </router-link>-->

                </div>

            </div>
        </pv-scrollpanel>
    </div>

</template>

<script>
import {UsersApiService} from "../thebigfun/services/users-api.service";

export default {
  name: "userregister-content-component",

  data() {
    return {
      /*            user:null,
            password:null,
            name:null,
            email:null,
            dni:null,*/
      user: {},
      currentUser: {},
      usersApi: new UsersApiService(),
      errors:[],
      //isDisabled:true,

    }
  },

  created() {
    console.log("primero", this.user.fullname);
  },

  methods: {
    saveUser() {
      console.log(this.user)
      this.usersApi.create(this.user).then()
          .catch(e => {
            console.log(e);
            this.errors.push(e);
          });
      this.currentUser = this.user
      this.user = {};
      console.log("currentUser : ",this.currentUser)
    }
  },

  computed:{
    isDisabled(){
      if(this.user.fullname===undefined || this.user.username===undefined || this.user.password===undefined|| this.user.email===undefined|| this.user.doc===undefined) {
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
