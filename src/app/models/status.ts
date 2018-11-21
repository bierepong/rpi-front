import * as _ from 'lodash';

export class Status {

    public username: string;
    public email: string;
    public balls: number;
    public uuid: string;
    public status: boolean[] = [];

    constructor(data?: any) {
        _.extend(this, data);
    }
}
