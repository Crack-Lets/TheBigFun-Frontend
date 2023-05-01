<template>
  <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
  <div class="background">
    <div class="title">
      <h1>EVENTOS POPULARES</h1>
    </div>

    <div class="totalContent">
      <div class="eventsContainer" v-for="event in events">
        <div>
          <img :src="event.img" :alt="event.name" aria-label="theater image" style="width:250px;margin-left:30px"/>
          <h2>{{event.name}}</h2>
          <pv-button>Ver detalles</pv-button>
        </div>
        <!--      <div>
                <img :src="eventImg2" alt="theater" aria-label="theater image" style="width:250px"/>
                <pv-button>Ver detalles</pv-button>
              </div>
              <div>
                <img :src="eventImg3" alt="theater2" aria-label="theater image" style="width:250px"/>
                <pv-button>Ver detalles</pv-button>
              </div>-->
      </div>
    </div>

  </div>
</template>

<script>
import {EventsApiService} from "../thebigfun/services/thebigfun-api.service";

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
.background {
    background: rgba(99, 99, 163, 0.35);
    border-radius: 30px;

}
.eventsContainer{
  display: flex;
  width: 33%;

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

.totalContent{
  display: flex;
}

</style>
