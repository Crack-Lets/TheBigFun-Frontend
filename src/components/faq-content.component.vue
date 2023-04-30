<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>FAQ</h1>
        </div>
        <pv-scrollpanel style="width: 100%; height: 350px;">
            <div v-for="faq in faqs">
                <div class="container">
                    <h3> {{faq.id}}. {{faq.question}}
                        <br>
                        {{faq.answer}}
                    </h3>
                </div>
            </div>
        </pv-scrollpanel>

    </div>

</template>

<script>
export default {
    name: "faq-content",
    data(){
        return{
            faqs:[
                {
                    id:"1",
                    question:"¿Cómo puedo suscribirme a la aplicación?",
                    answer:"R: Para suscribirte a nuestra aplicación, simplemente debes crear una cuenta en nuestro sitio web y completar el formulario de registro."
                },
                {
                    id:"2",
                    question:"¿Cómo puedo saber si hay disponibilidad de entradas para un evento?",
                    answer:"R: Si no hay entradas en un evento este se marcará como SOlD OUT en la información del evento y no te dejará realizar la compra."

                },
                {
                    id:"3",
                    question:"¿Cómo puedo encontrar eventos en mi ciudad?",
                    answer:"R: Puedes buscar eventos por ubicación en nuestra aplicación. Solo ingresa al apartado del mapa y podrás visualizar los eventos cercanos a tu ubicación"
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
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.background {
    background: rgba(99, 99, 163, 0.35);
    border-radius: 30px;
    padding: 30px;
}

.container {
    background: #ffffff;
    border-radius: 50px;
    padding: 20px;
    margin-bottom: 20px;
    max-width: 700px;
    margin-top: 10px;
}

.container h3 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    margin: 0;
}

@media (min-width: 768px) {
    .background {
        max-width: 800px;
        margin: 0 auto;
        padding: 50px;
        align-content:center;
        left:50%;
        justify-content:center;
    }

    .container {
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 50px;

    }

    .container h3 {
        font-size: 18px;
        line-height: 32px;
    }
}
</style>