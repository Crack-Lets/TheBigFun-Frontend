
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
                            <pv-button class="uptButton justify-content-center" style="width: 153px; height: 50px; border-radius: 25px;">
                                <a href="" >Sign in</a>
                            </pv-button>
                        </div>

                        <pv-divider layout="vertical" />

                        <div class="button-container flex align-items-center justify-content-center" >
                            <pv-button class="uptButton justify-content-center" style="width: 153px; height: 50px; border-radius: 25px;">
                                <a href="" >Sign up</a>
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

export default {
    name: "userlogin-content.component",
  components: {NavbarContent},

    data(){
        return{
            user:null,
            password:null,
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