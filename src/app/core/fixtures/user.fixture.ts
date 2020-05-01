import { User } from '../models/user';

export function getUsers(): Array<User> {
    return [
        {
            id: 1,
            username: 'admin',
            password: 'admin'
        }
    ];
}


