<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>


    <div class="background">
        <div class="title">
            <h1>EVENTOS POPULARES</h1>
        </div>
        <div class="totalContent">
            <pv-scrollpanel style="width: 100%; height: 500px; margin-right:-90px;">
                <div class="eventsContainer">
                    <div class="prueba" v-for="(event, index) in events">

                        <router-link :to="{name:'eventdetails', params:{event:JSON.stringify(event)}}">
                          <img :src="event.img" :alt="event.name" aria-label="theater image" style="width:250px; border-radius:30px; "/>
                          <h2 class="eventName">{{event.name}}</h2>
                            <pv-button>Ver detalles</pv-button>
                          <div v-if="(index+1)%3 ==0" class="row-end"></div>
                        </router-link>

                    </div>
                </div>
            </pv-scrollpanel>

        </div>

    </div>
</template>

<script>
import {EventsApiService} from "../thebigfun/services/events-api.service";

export default
{
    name: "home-content.component",
    data() {
        return {
            events: [],
            errors:[],
            eventsApi:new EventsApiService(),
        };
    },

    created() {
        this.getEvents();
        console.log("Created")

    },

    methods:{
        getEvents(){
            this.eventsApi.getEvents()
                .then(response=>{
                    this.events=response.data;
                    console.log("Datos recuperados : ",response.data)
                })
                .catch(e=>{
                    this.errors.push(e)
                })
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
.totalContent{
    align-items: center;
    text-align: center;
    justify-content:center;
}
.background {
    background: rgba(99, 99, 163, 0.35);
    border-radius: 30px;
    width: 1000px;
}
.eventName{
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 57px;
    color: rgba(83, 16, 92, 0.96);

}
.eventsContainer{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(200px, auto);
    width: 33%;
    align-items: center;
    margin-top:30px;
}
.row-end{
    grid-column-end: -1;
}
.prueba{
    padding: 10px;
    text-align:center;
    margin-left: 10px;

}


button{

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
        max-width: 1500px;
        max-height: 2000px;
        margin-top:10px;
        margin-left:auto;
        margin-right:auto;
        padding: 50px;
    }
}

</style>
