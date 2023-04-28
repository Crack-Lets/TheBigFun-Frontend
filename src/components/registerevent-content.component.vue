<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>Registrar evento:</h1>
        </div>
        <div class="body">
            <div class="imgContainer">
                <img :src="eventImg" alt="user picture" aria-label="Assistant Image" >
                <br>
                <pv-button label="Subir Imagen" />
            </div>
            <br>

            <div class="inputData"  >
                <pv-inputext  v-model="nameEvent" type="text" class="inputText p-inputtext-lg" placeholder="Nombre evento"/>
                <pv-calendar class="calendar " v-model="dateEvent" input-id="dateformat" placeholder="dd-mm-aaaa"/>
                <pv-calendar class="hour" id="calendar-timeonly" v-model="timeEvent" timeOnly placeholder="hh:mm" />
                <pv-inputext v-model="addressEvent" type="text" class="inputText p-inputtext-lg" placeholder="Dirección"  />
                <pv-textarea class="textarea" v-model="description" rows="2" cols="25" placeholder="Descripción del evento"/>
                <pv-dropdown v-model="selectedTickets" :options="typeTickets" optionLabel="name" placeholder="Seleccione un tipo de entrada" class="dropdown w-full md:w-18rem" />
                <pv-inputnumber class="maxcapacity" v-model="maxCapacity" inputId="minmax" :min="0" :max="100" placeholder="Capacidad máxima" />
                <pv-button label="Registar evento" />
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "registerevent-content",
    data(){
        return{
            eventImg: "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg",
            nameEvent:null,
            addressEvent:null,
            descriptionEvent:null,
            dateEvent:null,
            timeEvent:null,
            description: null,
            selectedTickets:null,
            typeTickets:[
                {name:'Estándar', code: 'est'},
                {name:'VIP', code: 'vip'}
            ],
            maxCapacity: null,
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
    padding: 30px;

}
.imgContainer{
    width:400px;
    text-align:center;

}
img{
    width: 300px;
    height: 400px;

}
.inputData{
    width: 270px;
    margin-left: 10%;


}
.inputText {
    width: 250px;
    height: 40px;
    margin-bottom: 20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
}
.calendar{
    width: 250px;
    height: 40px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
}
.hour{
    width: 250px;
    height: 40px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
}
.textarea{
    width: 250px;
    height: 70px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;

}
.dropdown{
    height: 50px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
}
.maxcapacity{
    height: 50px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
}
.body{
    display:flex;


}
@media (min-width: 768px) {
    .background {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
    }

}
</style>
