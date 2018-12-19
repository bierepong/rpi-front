import * as _ from 'lodash';

export class Status {

    public status: boolean[] = [];

    constructor(data?: any) {
        this.status = (data && data.status) ?
            data.status.map((value: number) => value > 200) : Array.apply(null, {length: 6}).map(() => false);
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
