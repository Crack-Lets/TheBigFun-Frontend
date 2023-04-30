<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card">

        <pv-scrollpanel style="width: 100%; height: 475px">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img alt="user header" src="src/assets/resources/logo.png" />
                </p>

                <Divider layout="vertical" />

                <div>
                    <div class="card flex align-items-center justify-content-center">
                        <pv-card style="width: 35em" >

                            <template #title>
                                <p class="title1">Nosotros</p>
                            </template>

                            <template #subtitle>
                                <li class="subs">Mision: Nuestra misión es facilitar a las personas la búsqueda de eventos sociales y la compra y venta de entradas. Asimismo, Ayudar a los anfitriones a tener un evento rentable.  </li>
                                <hr>
                                <li class="subs">Vision: Ser una aplicación y empresa con reconocimiento nacional e internacional en la publicidad de eventos y en el mercado de las transacciones de entradas. </li>
                            </template>



                            <template #content>
                                <p class="paragraphs">
                                    The big fun, es una plataforma de eventos que permite a
                                    sus usuarios encontrar los eventos que estén cerca a ellos,
                                    además de que les ofrece comprar entradas para los eventos
                                    que más les interesen en un solo lugar. Además de que, podra
                                    ofrecerle a sus usuarios recomendaciones de acuerdo
                                    a sus preferencias de tipos de eventos.
                                </p>
                            </template>

                        </pv-card>
                    </div>
                </div>
            </div>
        </pv-scrollpanel>
    </div>
</template>

<script>
export default {
    name: "aboutus-content.component"
}
</script>


<style scoped>

div{
    padding:8px;
    margin:auto;
}

.title1{

    text-align: center;
    font-size:40px;

    font-family: "Nunito", sans-serif;
    color: rgba(83, 16, 92, 0.96);
}

.subs{
    text-align: justify;
    font-size:15px;
    font-family: "Nunito", sans-serif;

}

.paragraphs{
    text-align: justify;
    font-size:17px;
    font-family: "Nunito", sans-serif;
}

.arriba{
    margin-top: 60px;
}

</style>