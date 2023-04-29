<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>COMPRA DE TICKET</h1>
        </div>
        <div class="imgContainer">
            <img :src="eventImg" alt="user picture" aria-label="Assistant Image" style="margin-left: 10px"/>
        </div>
        <br>
        <div class="datatable" >
            <pv-datatable class= "tablex" :value="tableData" style="border: 3px solid rgba(3, 83, 151, 1)"  >
                <pv-column field="date" header="Fecha"></pv-column>
                <pv-column field="hour" header="Hora"></pv-column>
                <pv-column field="nameEvent" header="Nombre del evento" ></pv-column>
                <pv-column field="qTikects" header="Cantidad tickets" ></pv-column>
                <pv-column field="price" header="Costo" ></pv-column>
                <pv-column field="capacity" header="Aforo"></pv-column>
                <pv-column field="disponibility" header ="Disponibilidad"></pv-column>
            </pv-datatable>
        </div>




    </div>

</template>

<script>
export default {
    name: "buy-tickets-content",
    data(){
        return{
            eventImg: "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg",
            tableData:[
                {
                    date: "25/04/2023",
                    hour:"8:00pm",
                    nameEvent:"Obra teatral 'La vida es un sueño'",
                    qTikects: "2",
                    price: "25",
                    capacity: "200",
                    disponibility: "83",
                    selectedQuantity: null,
                    quantitys:[
                          {quantity: 1},
                          {quantity: 2},
                          {quantity: 3},
                          {quantity: 4},
                          {quantity: 5},
                    ]
                }

            ]
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