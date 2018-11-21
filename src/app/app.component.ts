import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Game } from './models/game';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Status } from './models/status';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  public title = 'Beerless-Beerpong';
  public game: Game = new Game();

  private gamePoller: Subscription;
  public status: Status = new Status();


  constructor(
    private apiService: ApiService,
  ) {}

  start() {
    this.apiService.begin(this.game).subscribe();
  }

  end() {
    this.apiService.end().subscribe();
  }

  startPoller() {
    this.gamePoller = Observable.timer(1000, 1000).subscribe(() => {
      this.apiService.status().subscribe((status) => {
        this.status = status;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.gamePoller) {
      this.gamePoller.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.startPoller();
  }

}
