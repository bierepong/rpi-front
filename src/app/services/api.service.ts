import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'lodash';
import { Game } from '../models/game';
import { Status } from '../models/status';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
    ) {

    }

    begin(game: Game): Observable<any> {
        return this.http.post<any>('/api/begin', game);
    }

    end(): Observable<any> {
        return this.http.post<any>('/api/end', null);
    }

    status(): Observable<Status> {
        return this.http.get<Status>('/api/status').map((data) => new Status(data));
    }
}
