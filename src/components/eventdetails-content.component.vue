<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>{{event.name}}</h1>
        </div>
        <div class="body">
            <div class="imgContainer">
                <img :src="event.image" alt="Event Image" aria-label="Event Image" >
            </div>
            <br>
            <div class="information">
              District: {{event.district}}
              <br>
              Address: {{event.address}}
              <br>
              Date: {{event.datetime}}
              <br>
              Price: {{event.cost}}
              <br>
              Capacity: {{event.capacity}}
              <br>
              <router-link :to="{name:'payment', params:{id:(eventId)}}" >
                <pv-button @click="saveEventToAttendee" class="button" label="Buy" />
              </router-link>

            </div>
        </div>

    </div>
</template>

<script>
import {EventsApiService} from "@/thebigfun/services/events-api.service";

export default {
  name: "eventdetails-content",

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
    saveEventToAttendee(){
      console.log("Event : ",this.event);
      this.eventsApi.addEventToAttendee(Number(localStorage.getItem('userID')),this.eventId).then()
          .catch(e => {
            console.log(e);
            this.errors.push(e);
          });
      this.event = {};
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
    text-align: center;
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
.body{
    display:flex;
}
img{
    width: 300px;
    height: 400px;

}
.information{
    width: 400px;
    margin-left: 5%;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 57px;
    color: rgba(3, 83, 151, 1);

}
.button{
    background-color: transparent;
    border: 1px solid rgba(83, 16, 92, 0.96);
    border-radius: 30px;
    color:rgba(83, 16, 92, 0.96);
    margin-block: 20px;
    margin-left:30%;
}
@media (min-width: 768px) {
    .background {
        max-width: 1000px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 20px;
    }

}
</style>
