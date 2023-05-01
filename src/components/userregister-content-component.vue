<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card" >

        <pv-scrollpanel style="width: 100%; height: 475px">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img alt="user header" src="src/assets/resources/logo.png" />
                </p>

                <pv-divider layout="vertical" />

                <div class="info textos">

                    <div class="flex flex-column gap-2">
                        <label for="username" class="title" >Usuario</label>
                        <pv-inputtext class="container" id="username" v-model="user" aria-describedby="username-help" />
                        <small id="username-help" class="espacio">Ingresa tu nombre de usuario.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="password" class="title">Contraseña</label>
                        <pv-inputtext  class="container" id="password" v-model="password" toggleMask aria-describedby="password-help" />
                        <small id="password-help" class="espacio">Ingresa tu contraseña.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="name" class="title">Nombre</label>
                        <pv-inputtext class="container" id="name" v-model="name" aria-describedby="name-help" />
                        <small id="name-help" class="espacio">Ingresa tu nombre.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="email" class="title">Correo electronico</label>
                        <pv-inputtext class="container" id="email" v-model="email" aria-describedby="email-help" />
                        <small id="email-help" class="espacio">Ingresa tu correo.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <label for="dni" class="title">DNI</label>
                        <pv-inputtext class="container" id="dni" v-model="dni" aria-describedby="dni-help" />
                        <small id="dni-help" class="espacio">Ingresa tu DNI.</small>
                    </div>

                    <div class="button-container flex align-items-center justify-content-center" >
                        <pv-button class="uptButton justify-content-center" style="width: 153px; height: 50px; border-radius: 25px;">
                            <a href="" >Registrarse</a>
                        </pv-button>
                    </div>

                </div>

            </div>
        </pv-scrollpanel>
    </div>

</template>

<script>
export default {
    name: "userregister-content-component",

    data(){
        return{
            user:null,
            password:null,
            name:null,
            email:null,
            dni:null,
        }
    }

}
</script>

<style scoped>


.arriba{
    margin-top: 10px;
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

</style>