<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card" >

        <pv-scrollpanel style="width: 100%; height: 475px">

            <div class="card flex justify-content-center">

                <div class="arriba">

                    <h1 class="title">Organizer Profile</h1>

                    <img :src="userData.organizerimage" alt="user header"  />
                </div>

                <pv-divider layout="vertical" style= "margin-left: 130px"/>

                <div class="info textos ">

                    <div class="container">
                        <h3>Username:{{userData.username}} </h3>
                    </div>

                    <div class="container">
                        <h3>Name:{{userData.fullname}} </h3>
                    </div>

                    <div class="container">
                        <h3>Email:{{userData.email}} </h3>
                    </div>

                    <div class="container">
                        <h3>Name Company:{{userData.namecompany}} </h3>
                    </div>

                    <div class="container">
                        <h3>RUC:{{userData.ruc}} </h3>
                    </div>

                    <div class="container">
                        <h3>Adress:{{userData.adresscompany}} </h3>
                    </div>

                    <div class="container">
                        <h3>Phone:{{userData.phone}} </h3>
                    </div>

                    <div class="container">
                        <h3>DNI:{{userData.dni}} </h3>
                    </div>

                    <div class="button-container flex align-items-center justify-content-center">
                        <pv-button class="uptButton" style="width: 153px; height: 50px; border-radius: 25px;">
                            <a href="">Update data</a>
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
                organizerimage: "https://cdn.discordapp.com/attachments/1088535056072585349/1116952607479574558/organizer.png",
                username: " LuisLuisama",
                fullname: " Luis Andres Sanchez Luisama",
                email: " luis.sanchez.luisama@gmail.com",
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

.textos{
    font-family: "Nunito", sans-serif;
}
.title{
    text-align: center;
    color: rgba(83, 16, 92, 1);
    font-size:30px;
    font-family: "Nunito", sans-serif;
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