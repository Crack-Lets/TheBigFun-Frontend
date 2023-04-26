<template>
    <div class="card flex align-items-center justify-content-center">
        <pv-card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Nosotros </template>
            <template #subtitle>  </template>
            <template #content>
                <p>
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
</template>

<script>
export default {
    name: "aboutus-content.component"
}
</script>


<style scoped>
</style>