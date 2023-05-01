import http from '/src/core/services/http-common';

export class UsersApiService{
    create(user){
        return http.post('/users',user);
    }
}
