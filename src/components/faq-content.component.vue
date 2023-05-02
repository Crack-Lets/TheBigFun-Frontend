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
                    question:"¿How can I subscribe to the application?",
                    answer:"A: To subscribe to our application, simply create an account on our website and complete the registration form."
                },
                {
                    id:"2",
                    question:"How can I find out if tickets are available for an event?",
                    answer:"A: If there are no tickets for an event it will be marked as SOlD OUT in the event information and will not allow you to make the purchase."

                },
                {
                    id:"3",
                    question:"How can I find events in my city?",
                    answer:"A: You can search for events by location in our application. Just go to the map section and you will be able to visualize the events near your location."
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