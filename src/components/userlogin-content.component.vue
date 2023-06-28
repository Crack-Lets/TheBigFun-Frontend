
<template>



    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="content">

        <pv-scrollpanel style="width: 100%; height: 475px">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img alt="user header" src="https://cdn.discordapp.com/attachments/1088535056072585349/1116951446114533456/logo.png" />
                </p>

                <pv-divider layout="vertical" />

                <div class="info textos">

                    <div class="flex flex-column gap-2">
                        <label for="username" class="title" >Username</label>
                        <pv-inputext type="text" class="container" id="username" v-model="user" aria-describedby="username-help" />
                        <small id="username-help" class="espacio">Enter your username</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="password" class="title">Password</label>
                        <pv-inputext  type="text" class="container" id="password" v-model="password" toggleMask aria-describedby="password-help" />
                        <small id="password-help" class="espacio">Enter your password</small>
                    </div>

                    <div class="card flex justify-content-center">

                        <div class="button-container flex align-items-center justify-content-center" >
                            <pv-button @click="filter" class="uptButton justify-content-center" style="width: 153px; height: 50px; border-radius: 25px;">
                                <a >Sign in</a>
                            </pv-button>
                        </div>

                        <pv-divider layout="vertical" />

                        <div class="button-container flex align-items-center justify-content-center" >
                            <pv-button  class="uptButton justify-content-center" style="width: 153px; height: 50px; border-radius: 25px;">
                                <a href="/userRegister" >Sign up</a>
                            </pv-button>
                        </div>

                    </div>

                </div>

            </div>
        </pv-scrollpanel>
    </div>
</template>

<script>
import NavbarContent from "@/components/navbar-content.component.vue";
import {UsersApiService} from "@/thebigfun/services/users-api.service";

export default {
    name: "userlogin-content.component",

  components: {NavbarContent},

    data(){
        return{
            user:null,
            password:null,
            organizers:[],
            attendees:[],
            usersApi:new UsersApiService(),
        }
    },
  created() {
      this.getAll();

  },
  methods:{

    getAll()
    {
      this.usersApi.getOrganizers()
        .then(response=>{
          this.organizers=response.data;
          console.log("Organizers recovered : ",response.data)
        })
        .catch(e=>{
          this.errors.push(e)
        })
      this.usersApi.getAttendees()
          .then(response=>{
            this.attendees=response.data;
            console.log("Attendees recovered : ",response.data)
          })
          .catch(e=>{
            this.errors.push(e)
          })
    },
    filter(){
      const foundOrganizer = this.organizers.find(organizer => organizer.userName === this.user);
      const foundAttendee = this.attendees.find(attendee => attendee.userName === this.user);
      if (foundOrganizer) {
        console.log("User found in organizers:", foundOrganizer);
        this.$router.push("/home");
        localStorage.setItem('typeUser', 'organizer');
        localStorage.setItem('userID', foundOrganizer.id)
        localStorage.setItem('username', foundOrganizer.userName)
        localStorage.setItem('login', 'true')
        console.log("User Organizer ID :", localStorage.getItem('userID'));
        console.log("User username :", localStorage.getItem('username'));
      } else {
        console.log("User not found in organizers.");
        if (foundAttendee) {
          console.log("User found in Attendee:", foundAttendee);
          this.$router.push("/home");
          localStorage.setItem('typeUser', 'attendee');
          localStorage.setItem('userID', foundAttendee.id)
          localStorage.setItem('username', foundAttendee.userName)
          localStorage.setItem('login', 'true')
          console.log("User Attendee ID :", localStorage.getItem('userID'));
          console.log("User username :", localStorage.getItem('username'));
        } else {
          console.log("User not found in Attendee.");
        }
      }
    }

  }

}
</script>

<style scoped>


.arriba{
    margin-top: 10px;
}

.espacio{
    margin-bottom:30px;
    text-align: center;
}

.textos{
    font-family: "Nunito", sans-serif;
}

.title{
    text-align: center;
    color: rgba(83, 16, 92, 1);
    font-size:30px;
    font-weight:bold;
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

</style>