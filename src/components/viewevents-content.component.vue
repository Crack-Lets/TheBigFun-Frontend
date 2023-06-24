<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="background">
        <div class="title">
            <h1>AVAILABLE EVENTS</h1>
        </div>
        <div class="totalContent">
            <pv-scrollpanel style="width: 100%; height: 500px;">
                <div class="eventsContainer" v-for="event in events" :key="event.id">
                    <div class="tableStyle">
                        <pv-datatable class="eventTable" :value="[event]" style="border: 3px solid rgba(3, 83, 151, 1); width:1000px">
                            <pv-column field="datetime" header="Date"></pv-column>
                            <pv-column field="name" header="Event Name"></pv-column>
                            <pv-column field="cost" header="Price"></pv-column>
                            <pv-column field="capacity" header="Capacity"></pv-column>
                        </pv-datatable>
                      <router-link :to="{name:'eventdetails', params:{id:(event.id)}}">
                        <pv-button>View details</pv-button>
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
    name: "view-events.component",
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
.eventsContainer{
    align-items: center;
    text-align: center;
}
.tableStyle{
    display:flex;
    margin-bottom: 40px;
    justify-content: center;
}
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
    height:700px;
}


button{
    margin-top:20px;
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
    margin-left: 50px;
    height: 50px;
}
@media (min-width: 768px) {
    .background {
        max-width: 1500px;
        max-height: 2000px;
        margin: 0 auto;
        padding: 50px;
    }
}
.totalContent{
    display: flex;
}
</style>
