<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>Lista de Asistentes</h1>
        </div>
        <div v-for="(item, index) in asisNames" :key="index" class="attendee" >
            <i class="pi pi-circle-fill" style="color:rgba(83, 16, 92, 0.96); font-size: 0.5rem "/>
            <img :src="asisImg[index]" alt="user picture" aria-label="Assistant Image"  style="border-radius: 100px"/>
            <div class="names">
                {{asisNames[index]}}
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "attendancelist-content",
    data(){
        return{
            asisNames:['Remi Adam Purrel','Riwsey Otiniano Lizama','Elsa Martinez Paz','Katherine Valdez Parra '],
            asisImg:['https://randomuser.me/api/portraits/men/25.jpg','https://randomuser.me/api/portraits/men/26.jpg','https://randomuser.me/api/portraits/women/43.jpg','https://randomuser.me/api/portraits/women/78.jpg']
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
.names{
    width: 313px;
    height: 49px;
    left: 372px;
    top: 528px;

    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 49px;

    color: #000000;
    display: inline;

}
img{
    display: inline;
    width: 70px;
    height: 70px;
    margin-right: 10px;

}
.attendee {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-top: 50px;

}
@media (min-width: 768px) {
    .background {
        max-width: 800px;
        margin: 0 auto;
        padding: 50px;
    }

}
</style>