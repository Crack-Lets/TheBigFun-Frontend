<template>

    <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>

    <div class="card">

        <pv-scrollpanel style="width: 100%">

            <div class="card flex justify-content-center">

                <p class="arriba">
                    <img alt="user header" src="src/assets/resources/logo.png" />
                </p>

                <Divider layout="vertical" />

                <div>
                    <div class="card flex align-items-center justify-content-center">
                        <pv-card style="width: 35em" >

                            <template #title>
                                <p class="title1">About us</p>
                            </template>

                            <template #subtitle>
                                <li class="subs">Mission: Our mission is to make it easy for people to find social events and buy and sell tickets. Also, help hosts have a profitable event. </li>
                                <hr>
                                <li class="subs">Vision: To be an application and company with national and international recognition in event advertising and in the market for ticket transactions.</li>
                            </template>



                            <template #content>
                                <p class="paragraphs">
                                    The big fun, is an events platform that allows
                                    your users to find the events that are close to them,
                                    In addition to offering them to buy tickets for the events
                                    that interest you most in one place. Besides that, you could
                                    offer its users recommendations according to
                                    to your event type preferences.
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
    margin-top: 20px;
}

</style>
