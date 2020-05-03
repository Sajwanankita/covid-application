import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { getUsers } from './../fixtures/user.fixture';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    validateUser(user: User): boolean {
        let isValidUser = false;
        const index = getUsers().findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase());
        if (index > -1) {
            const currentUser = getUsers()[index];
            isValidUser = (currentUser.password === user.password);
        }
        return isValidUser;
    }

}
