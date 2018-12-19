import { Status } from './status';

export class Game {

    public username: string;
    public status: Status = new Status();
    public state = false;

    constructor(username = '') {
        this.username = username;
    }

    reset() {
        this.status = new Status();
    }
}
