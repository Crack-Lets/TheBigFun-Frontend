<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>BUY TICKETS</h1>
        </div>
        <div class="button-container flex align-items-end">
          <router-link :to="{name:'paymentconfirmation', params:{id:(eventId)}}">
            <pv-button @click="savePaymentToEventAttendee" class="payButton" >
              <a class ="buttonText" >Pay by credit card</a>
            </pv-button>
          </router-link>
        </div>
        <div class="imgContainer">
            <img :src="event.image" alt="user picture" style="width: 200px" />
        </div>
        <br>
        <div class="datatable">
            <pv-datatable class= "tablex" :value="[event]" style="border: 3px solid rgba(3, 83, 151, 1)">
                <pv-column field="datetime" header="Date"></pv-column>
                <pv-column field="name" header="Event Name"></pv-column>
                <pv-column field="cost" header="Price"></pv-column>
                <pv-column field="capacity" header="Capacity"></pv-column>
            </pv-datatable>
        </div>


    </div>
</template>

<script>
import {EventsApiService} from "@/thebigfun/services/events-api.service";

export default {
    name: "buy-tickets-content",
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
    savePaymentToEventAttendee(){
      const payment = {
        eventId: this.eventId,
        date: this.event.datetime
      };
      console.log("Event : ",this.event);
      this.eventsApi.addPaymentToEventAttendee(Number(localStorage.getItem('userID')),this.eventId, payment).then()
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
    text-align: left;
    margin-top: 5px;
}
.payButton {
    width: 337px;
    height: 77px;
    color: #ffffff;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #53105c;
}

.drop h3{
    margin-left: 40%;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 57px;
    color: rgba(83, 16, 92, 0.96);
    text-align: left;
    margin-bottom: -5px;

}
.dropdown {
    margin-left: 33%;
}
.button-container{
    margin-left: auto;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 70px;
    border-radius: 3px;
}

.buttonText{
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 29px;
    line-height: 40px;
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
    margin-left:70px;
    margin-top:-50px;

}
.datatable pv-datatable{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (min-width: 768px) {
    .background {
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
    }
}
</style>