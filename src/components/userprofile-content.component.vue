<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <section class="profile-container">
        <div class="title">
            <h1>Perfil de usuario</h1>
        </div>

        <div class="content">
            <div class="profile-pic">
                <img src="public/ya.jpg" alt="profile" style="border-radius: 600px; width: 485px;">
            </div>

            <div class="info">
                <div class="container">
                    <h3>Usuario: Kane</h3>
                </div>
                <div class="container">
                    <h3>Nombre completo: Kevin Oliva</h3>
                </div>
                <div class="container">
                    <h3>Correo: kevin.oliva.alva@gmail </h3>
                </div>
                <div class="container">
                    <h3>Telefono: 999563680 </h3>
                </div>
                <div class="container">
                    <h3>Dni: 73089923 </h3>
                </div>
                <div class="button-container flex align-items-center justify-content-center">
                    <pv-button class="uptButton" style="width: 153px; height: 50px; border-radius: 25px;">
                        <a href="">Actualizar datos</a>
                    </pv-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "userprofile-content"
};
</script>

<style scoped>
.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.title h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 699px;
    height: 94px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 57px;
    color: rgba(83, 16, 92, 0.96);
    margin-top: 100px;
    margin-left: 250px;
}

.container {
    width: 700px;
    height: 90px;
    border: 1px solid #53105c;
    border-radius: 10px;
    text-align: justify;
    background: #ffffff;
    margin-bottom: 30px;
}

.container h3 {
    width: 630px;
    height: 60px;
    margin-top: 35px;
    margin-left: 30px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
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

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.profile-pic {
    margin-right: 350px;
    margin-bottom: 100px;
    max-width: 100%;
    height: auto;
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
    .content {
        flex-direction: column;
        align-items: center;
    }

    .profile-pic {
        margin-right: 0;
        margin-bottom: 30px;
    }

    .container {
        width: 90%;
    }

    .title h1 {
        margin-left: 20px;
        width: auto;
    }
}
</style>