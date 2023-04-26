<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <section class="profile-container">
        <div class="title" style ="margin-top: 200px;">
            <h1>Perfil de usuario</h1>
        </div>

    <img src="public/ya.jpg" alt="profile-pic" style ="border-radius: 600px; width: 400px; margin-top:260px; margin-left:125px" > <!-- Falta agregar una foto de perfil de prueba-->

    <div>


        <div class = "bars">
            <div class="container" style="width: 683px; height: 104px; left: 682px; top: 362px;">
                <h3>Usuario: Kane</h3>
            </div>
            <div class="container" style="width: 683px; height: 104px; left: 682px; top: 482px;">
                <h3>Nombre completo: Kevin Oliva</h3>
            </div>
            <div class="container" style="width: 683px; height: 104px; left: 682px; top: 602px;">
                <h3>Correo: kevin.oliva.alva@gmail </h3>
            </div>
            <div class="container" style="width: 683px; height: 104px; left: 682px; top: 722px;">
                <h3>Telefono: 999563680 </h3>
            </div>
            <div class="container" style="width: 683px; height: 104px; left: 682px; top: 842px;">
                <h3>Dni: 73089923 </h3>
            </div>
        </div>


            <pv-button class ="uptButton justify-content-center" style="  width: 354px; height: 103px; border-radius: 50px;">
                <a href="" >Actualizar datos </a> <!--falta referencia-->
            </pv-button>

    </div>
    </section>
</template>


<script>
export default {
    name: "userprofile-content"
}

</script>

<style scoped>
.title h1{
    position: absolute;
    width: 699px;
    height: 94px;
    left: 170px;


    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 57px;

    color: rgba(83, 16, 92, 0.96);
}

.container {
    position: absolute;
    width: 700px;
    height: 129px;
    left: 67px;
    top: 120px;
    border: 1px solid #53105C;
    border-radius: 10px;
    text-align: justify;
    background: #FFFFFF;


}
.container h3{
    position: absolute;
    width: 630px;
    height: 93px;
    left: 33px;
    top: 5px;
    margin-top: 35px;
    font-family: 'Nunito',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;

    color: #53105C;
}

.uptButton{
    position: absolute;
    width: 355px;
    height: 104px;
    left: 823px;
    top: 979px;
    color: #FFFFFF ;
    border-radius: 50px;
    background-color: white;
    border: 1px solid #53105C;


}
img{
    top: 200px;

}
</style>