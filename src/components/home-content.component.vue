<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>EVENTOS POPULARES</h1>
        </div>
        <div class="imgContainer">
            <div>
                <img :src="eventImg" alt="user picture" aria-label="theater image" style="width:250px;margin-left:30px"/>
                <pv-button>Ver detalles</pv-button>
            </div>
            <div>
                <img :src="eventImg2" alt="theater" aria-label="theater image" style="width:250px"/>
                <pv-button>Ver detalles</pv-button>
            </div>
            <div>
                <img :src="eventImg3" alt="theater2" aria-label="theater image" style="width:250px"/>
                <pv-button>Ver detalles</pv-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-content.component",
    data(){
        return{
            eventImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU",
            eventImg2: "https://www.curriculumnacional.cl/estudiante/621/articles-144873_imagen_portada.thumb_iCuadrada.jpg",
            eventImg3: "https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png"
        }
    }
}
</script>

<style scoped>
.title h1 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 57px;
    color: rgba(83, 16, 92, 0.96);
    text-align: left;
    margin-top: 5px;
}
.background {
    background: rgba(99, 99, 163, 0.35);
    border-radius: 30px;

}
.imgContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    margin-top:100px;
}
.imgContainer div{
    margin: 0 20px;
}
button{
    display: block;
    margin-top:50px;
    margin-left:100px;
    background-color: rgba(83, 16, 92, 0.96);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;

}
@media (min-width: 768px) {
    .background {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
    }
    img{
        margin-left: 40px;
    }
}
</style>