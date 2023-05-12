import http from '/src/core/services/http-common';

export class EventsApiService{
    getEvents(){
        return http.get('/events');
    }

    createEvent(event){
        return http.post('/events', event)
    }
}
