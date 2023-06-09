import http from '/src/core/services/http-common';

export class UsersApiService{
    createOrganizers(user){
        return http.post('/organizers',user);
    }
    createAttendee(user){
        return http.post('/attendees',user);
    }
    getOrganizers(){
        return http.get('/organizers');
    }
    getAttendees(){
        return http.get('/attendees');
    }
    getOrganizerEvents(id){
        return http.get(`/organizers/${id}/events`);
    }
    getAttendeeEvents(id){
        return http.get(`/attendees/${id}/events`);
    }
}
