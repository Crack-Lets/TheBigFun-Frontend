<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>SUCCESSFUL PURCHASE</h1>
        </div>
        <div class="imgContainer">
            <img :src="event.image" alt="user picture" aria-label="Assistant Image" style="margin-left: 10px"/>
          <img src="https://user-images.githubusercontent.com/4993276/69906263-8d535d00-139f-11ea-8ee8-6f21a41bc60e.jpeg" alt="user picture" aria-label="Assistant Image" style="margin-left: 10px"/>
        </div>
        <br>

        <div class="datatable" >
            <pv-datatable :value="[event]" style="border: 3px solid rgba(3, 83, 151, 1);" >
                <pv-column field="datetime" header="Date"></pv-column>
                <pv-column field="name" header="Name Event" ></pv-column>
            </pv-datatable>
        </div>




    </div>

</template>

<script>
import {EventsApiService} from "@/thebigfun/services/events-api.service";

export default {
    name: "paymentconfirmation-content",
    data(){
        return{

          eventsApi:  new EventsApiService(),
          event: {},
          eventId:JSON.parse(this.$route.params.id)
        }
    },
  created() {
    this.getEventsById();
    console.log("Created")

  },
  methods:{
    getEventsById(){
      this.eventsApi.getEventsById(this.eventId)
          .then(response=>{
            this.event=response.data;
            console.log("Datos recuperados : ",response.data)
          })
          .catch(e=>{
            this.errors.push(e)
          })
    },

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

img{
    display: inline;
    width: 300px;
    margin-right: 100px;
}
.imgContainer{
    display: flex;
    align-items: center;
    justify-content: center;

}
.datatable pv-datatable{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

}
@media (min-width: 768px) {
    .background {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
    }

}

</style>