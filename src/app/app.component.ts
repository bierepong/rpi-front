import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Game } from './models/game';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';
import { timer } from 'rxjs';
import { Status } from './models/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title = 'Beerless-Beerpong';
  public game: Game = new Game();

  private gamePoller: Subscription;
  private poller = timer(1000, 1000);
  private subcription: Subscription;


  constructor(
    private apiService: ApiService,
  ) {}

  start(): void {
    this.game.reset();
    this.apiService.begin(this.game).subscribe(() => {
      this.game.state = true;
    });
    this.startPoller();
  }

  end(): void {
    this.stopPoller();
    this.apiService.end(this.game).subscribe(() => {
      this.game.state = false;
    });
  }

  startPoller(): void {
    this.stopPoller();
    this.subcription = this.poller.subscribe(() => {
      this.apiService.status().subscribe((status: Status) => {
        this.game.status = status;
        this.game.status.display();
      });
    });
  }

  stopPoller(): void {
    if (!this.subcription) {
      return;
    }
    this.subcription.unsubscribe();
    this.subcription = null;
  }

  ngOnDestroy(): void {
    if (this.gamePoller) {
      this.gamePoller.unsubscribe();
    }
  }

}
