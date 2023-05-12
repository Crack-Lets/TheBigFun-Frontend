<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>Register event:</h1>
        </div>
        <div class="body">
<!--            <div class="imgContainer">
                <img :src="eventImg" alt="user picture" aria-label="Assistant Image" >
                <br>
                <pv-button class="button" label="Subir Imagen"  />
            </div>
            <br>-->

            <div class="inputData"  >
                <pv-inputext  v-model="event.name" type="text" class="inputText p-inputtext-lg" placeholder="Name Event"/>
                <div class="hourdate">
<!--                    <pv-calendar class="calendar" v-model="date" dateFormat="dd/mm/yy" input-id="dateformat" placeholder="dd-mm-aaaa"/>
                    <pv-calendar class="hour" id="calendar-timeonly" showTime hourFormat="12" v-model="event.hour" timeOnly placeholder="hh:mm" />-->
                  <pv-inputext  v-model="event.date" type="text" class="inputText2 p-inputtext-lg" placeholder="Date"/>
                  <pv-inputext  v-model="event.hour" type="text" class="inputText2 p-inputtext-lg" placeholder="Hour"/>
                </div>
                <pv-inputext v-model="event.address" type="text" class="inputText p-inputtext-lg" placeholder="Address"  />

                <pv-inputext v-model="event.img" type="text" class="inputText p-inputtext-lg" placeholder="Img link"  />
                <pv-textarea class="textarea" v-model="event.description" rows="2" cols="25" placeholder="Event description"/>
                <pv-dropdown v-model="event.typeTicket" :options="typeTickets" optionLabel="name" placeholder="Type of ticket" class="dropdown w-full md:w-18rem" />
                <pv-inputext v-model="event.cost" type="text" class="inputText2 p-inputtext-lg" placeholder="Ticket Price"  />
                <pv-inputnumber class="maxcapacity" v-model="event.aforo" inputId="minmax" :min="0" :max="100" placeholder="Max Capacity" />
                <br>
                <pv-button class="regtevent" @click="saveEvent" label="Register" />
            </div>
        </div>

    </div>

</template>

<script>
import {EventsApiService} from "../thebigfun/services/events-api.service";

export default {
    name: "registerevent-content",
    data(){
        return{
          typeTickets:[
            {name:'Estándar', code: 'est'},
            {name:'VIP', code: 'vip'}
          ],
/*            eventImg: "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg",
            nameEvent:null,
            addressEvent:null,
            descriptionEvent:null,
            dateEvent:null,
            timeEvent:null,
            description: null,
            selectedTickets:null,

            maxCapacity: null,*/
          event:{},
          eventsApi:new EventsApiService(),
          errors:[],


        }
    },


  methods:{
      saveEvent(){
        console.log("Event : ",this.event);
        this.eventsApi.createEvent(this.event).then()
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
.button{
    background-color: transparent;
    border: 1px solid rgba(83, 16, 92, 0.96);
    border-radius: 30px;
    color:rgba(83, 16, 92, 0.96);
    margin-block: 20px;
}
.regtevent{
    background-color: transparent;
    border: 1px solid rgba(83, 16, 92, 0.96);
    border-radius: 30px;
    color:rgba(83, 16, 92, 0.96);

}
.inputData{
    width: 400px;
    margin-left: 5%;
    text-align: center;
}
.inputText {
    width: 400px;
    height: 40px;
    margin-bottom: 20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    border-radius: 5px;
    border: 1px solid rgba(3, 83, 151, 1);

}

.inputText2 {
  width: 50%;
  height: 40px;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  border-radius: 5px;
  border: 1px solid rgba(3, 83, 151, 1);

}

.hourdate{
    display:flex;
    width:400px;
}
.calendar{
    width: 200px;
    height: 40px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    display:flex;
    border-radius: 4px;
    border: 1px solid rgba(3, 83, 151, 1);
}
.hour{
    width: 200px;
    height: 40px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    border: 1px solid rgba(3, 83, 151, 1);
    border-radius: 4px;
}
.textarea{
    width: 400px;
    height: 70px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    border: 1px solid rgba(3, 83, 151, 1);

}
.dropdown{

    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    border-radius: 5px;
    border: 1px solid rgba(3, 83, 151, 1);
}
.maxcapacity{
    height: 50px;
    margin-bottom:20px;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    border-radius: 5px;
    border: 1px solid rgba(3, 83, 151, 1);
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
