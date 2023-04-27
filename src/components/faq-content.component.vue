<template>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
    <div class="background">
        <div class="title">
            <h1>FAQ</h1>
        </div>
        <div class="container" style="max-width: 700px; margin-top: 50px;">
            <h3> 1. ¿Cómo puedo suscribirme a la aplicación?
                <br>
                R: Para suscribirte a nuestra aplicación, simplemente debes crear una cuenta en nuestro sitio web y completar el formulario de registro.
            </h3>
        </div>
        <div class="container" style="max-width: 700px; margin-top: 50px;">
            <h3> 2. ¿Cómo puedo saber si hay disponibilidad de entradas para un evento?
                <br>
                R: Si no hay entradas en un evento este se marcará como SOlD OUT en la información del evento y no te dejará realizar la compra.
            </h3>
        </div>
        <div class="container" style="max-width: 700px; margin-top: 50px;">
            <h3> 3. ¿Cómo puedo encontrar eventos en mi ciudad?
                <br>
                R: Puedes buscar eventos por ubicación en nuestra aplicación. Solo ingresa al apartado del mapa y podrás visualizar los eventos cercanos a tu ubicación
            </h3>
        </div>
    </div>

</template>

<script>
export default {
    name: "faq-content"
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
    margin-top: 20px;
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
    margin-bottom: 30px;
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
        display:flex;
        left:50%;
        justify-content:center;
    }

    .container {
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .container h3 {
        font-size: 22px;
        line-height: 32px;
    }
}
</style>