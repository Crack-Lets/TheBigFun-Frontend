import http from '/src/core/services/http-common';

export class EventsApiService{
    getEvents(){
        return http.get('/events');
    }
    getEventsById(id){
        return http.get('/events/'+id);
    }

    createEvent(event){
        return http.post('/events', event)
    }

    createEventToOrganizer(organizerId, event){
        return http.post('/organizers/'+organizerId+'/events', event)
    }

    addEventToAttendee(attendeeId, eventId){
        return http.post('/attendees/'+attendeeId+'/events/'+eventId)
    }
    addPaymentToEventAttendee(attendeeId,eventId, payment){
        return http.post('/attendees/'+attendeeId+'/events/'+eventId+'/payments', payment)
    }
}
