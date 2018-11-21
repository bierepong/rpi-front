export class Game {

    public username: string;
    public email: string;
    public balls: number;

    constructor(username = '', email = '', balls = 3) {
        this.username = username;
        this.email = email;
        this.balls = balls;
    }
}
