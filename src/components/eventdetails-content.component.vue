<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>{{event.name}}</h1>
        </div>
        <div class="body">
            <div class="imgContainer">
                <img :src="event.img" alt="Event Image" aria-label="Event Image" >
            </div>
            <br>
            <div class="information">
                Fecha: {{event.date}}
                <br>
                Hora: {{event.hour}}
                <br>
                Precio: {{event.cost}}
                <br>
                Aforo: {{event.aforo}}
                <br>
                <pv-button class="button" label="Comprar" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "eventdetails-content",

  data(){
    return{
      event:JSON.parse(this.$route.params.event)
    }
  }
/*  data() {
    return {
                  nameEvent: "Chatarrita",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU",
                  date: "12/10/2023",
                  hour: "8pm",
                  cost: "20$",
                  capacity: "200",
                  location: "Av. las fresias 158 la molina",

    }
  }*/
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
