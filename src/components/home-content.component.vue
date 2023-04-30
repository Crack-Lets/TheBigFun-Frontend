<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>EVENTOS POPULARES</h1>
        </div>
        <div class="imgContainer">
            <div v-for="event in events">
                <img :src="event.url" :alt="event.id" aria-label="event image" style="width:250px;margin-left:30px"/>
                <h3 class="nameEvent">{{event.name}}</h3>
                <pv-button @click="showDetails(event)">Ver detalles</pv-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-content.component",
    data(){
        return{
            events:[
                {
                    id: "1",
                    name: "Evento 1",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU",
                    details: "Descripción del evento Chatarrita"
                },
                {
                    id: "2",
                    name: "Evento 2",
                    url: "https://www.curriculumnacional.cl/estudiante/621/articles-144873_imagen_portada.thumb_iCuadrada.jpg",
                    details: "Descripción del evento 2"
                },
                {
                    id: "3",
                    name: "Evento 3",
                    url: "https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png",
                    details: "Descripción del evento 3"
                }
            ]
        }
    },
    methods: {
        showDetails(event) {
            // aqui iria la logica para mostrar los detalles del evento (en caso se requiera)
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
.nameEvent{
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 57px;
    color: rgba(83, 16, 92, 0.96);
    text-align: left;
    margin-top: 5px;
    margin-left:110px;
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