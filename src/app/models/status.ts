import * as _ from 'lodash';

export class Status {

    public username: string;
    public email: string;
    public balls = 6;
    public uuid: string;
    public status: boolean[] = [];

    constructor(data?: any) {
        _.extend(this, data);

        if (!data.status) {
            data.status = Array.apply(null, {length: this.balls}).map(Boolean.call, Boolean);
        }
    }

    toggle(num, value) {
        this.status[num] = value !== undefined ? value : !this.status[num];
        const ball = window.document.getElementById('ball' + (num + 1));
        if (ball) {
            ball.setAttribute('class', 'ball ' + (this.status[num] ? 'full' : 'empty'));
        }
    }

    display() {
        _.forEach(this.status, (onOff: boolean, index: number) => {
            const ball = window.document.getElementById('ball' + (index + 1));
            if (ball) {
                ball.setAttribute('class', 'ball ' + (this.status[index] ? 'full' : 'empty'));
            }
        });
    }
}
