<template>

    <div class="card">

        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

        <pv-scrollpanel style="width: 100%; height: 475px">

            <div class="background">

                <div class="title">
                    <h1>Mis eventos activos </h1>
                </div>

                <div class="datatable" >
                    <pv-datatable :value="dataEvent" style="border: 3px solid rgba(3, 83, 151, 1);" class="text">

                        <pv-column field="title" header="Nombre del evento"></pv-column>
                        <pv-column field="hour" header="Hora"></pv-column>
                        <pv-column field="day" header="Dia" ></pv-column>
                        <pv-column field="month" header="Mes" ></pv-column>

                    </pv-datatable>
                </div>

                <div  class="arriba">

                    <div class="card flex justify-content-center">

                        <div class="card flex justify-content-center">
                            <pv-button class="botones" label="Registrar Evento" />
                        </div>

                        <pv-divider layout="vertical" />

                        <div class="card flex justify-content-center">
                            <pv-button class="botones" label="Historial de Eventos" />
                        </div>

                    </div>

                </div>

            </div>

        </pv-scrollpanel>

    </div>

</template>

<script>
export default {
    name: "organizereventlist-content.component",

    data(){
        return{
            dataEvent:[

                {
                    "title": "Hermanas de pascal dammert",
                    "day": 20,
                    "month": "May",
                    "hour": "8:00 pm"
                },

                {
                    "title": "Despertar de primavera",
                    "day": 1,
                    "month": "Jun",
                    "hour": "7:00 pm"
                },

            ]
        }


    },

}
</script>

<style scoped>

.arriba{
    margin-top: 60px;
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
    padding: 30px;
}
.text{
    font-family: 'Nunito', sans-serif;
    color: darkblue;
}

.botones {
    background: white;
    color: rgba(83, 16, 92, 0.96);
}

.datatable pv-datatable {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
}
@media (min-width: 768px) {
    .background {
        max-width: 800px;
        margin: 0 auto;
        padding: 50px;
    }
}
</style>