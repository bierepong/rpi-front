import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
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

    end(game: Game): Observable<any> {
        return this.http.post<any>('/api/end', game);
    }

    status(): Observable<Status> {
        return this.http.get<Status>('/api/status').map((data) => new Status(data));
    }
}
