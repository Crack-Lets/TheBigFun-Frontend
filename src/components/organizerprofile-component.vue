<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card" >

        <pv-scrollpanel style="width: 100%; height: 435px">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img :src="userData.organizerimage" alt="user header"  />
                </p>

                <pv-divider layout="vertical" style= "margin-left: 130px"/>

                <div class="info textos ">

                    <div class="container">
                        <h3>Usuario:{{userData.username}} </h3>
                    </div>

                    <div class="container">
                        <h3>Nombre completo:{{userData.fullname}} </h3>
                    </div>

                    <div class="container">
                        <h3>Correo:{{userData.email}} </h3>
                    </div>

                    <div class="container">
                        <h3>Nombre de la empresa:{{userData.namecompany}} </h3>
                    </div>

                    <div class="container">
                        <h3>RUC:{{userData.ruc}} </h3>
                    </div>

                    <div class="container">
                        <h3>Direccion:{{userData.adresscompany}} </h3>
                    </div>

                    <div class="container">
                        <h3>Telefono:{{userData.phone}} </h3>
                    </div>

                    <div class="container">
                        <h3>DNI:{{userData.dni}} </h3>
                    </div>

                    <div class="button-container flex align-items-center justify-content-center">
                        <pv-button class="uptButton" style="width: 153px; height: 50px; border-radius: 25px;">
                            <a href="">Actualizar datos</a>
                        </pv-button>
                    </div>

                </div>

            </div>
        </pv-scrollpanel>
    </div>

</template>

<script>
export default {
    name: "organizerprofile-component",

    data() {
        return{
            userData:{
                organizerimage: "src/assets/resources/organizer.png",
                username: " kane",
                fullname: " Kevin Oliva Alva",
                email: " kevin.oliva.alva@gmail.com",
                phone: " 999563680",
                dni: " 73089923",
                namecompany: " Stoza",
                ruc:" 20 50364496 8",
                adresscompany:" Calle José Ortega y Gasset, 40 - loc.",
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
    margin-bottom: 30px;
}
.container h3 {
    width: 500px;
    height: 50px;
    margin-top: 10px;
    text-align:center;
    font-family: "Nunito", sans-serif;
    color: #53105c;
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