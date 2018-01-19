import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bidder } from '../../interfaces/bidder';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public bidders: Bidder[];
  public user: Bidder;

  public bidd: number;

  constructor(
    private api: ApiService,
    private storage: StorageService,
    private router: Router
  ) {
    this.user = {
      name: '',
      endpoint: '',
      wallet: 0,
      _id: ''
    };
  }

  ngOnInit() {
    this.reload();
    this.reloadUser();
  }

  reload() {
    this.api
      .getAllBidders()
      .toPromise()
      .then(bidders => {
        this.bidders = bidders;
      });
  }

  reloadUser() {
    this.storage.getUser().then((user: User) => {
      console.log(user);
      if (user) {
        this.api
          .getBidder(user.name)
          .toPromise()
          .then(res => {
            if (!res[0]) {
              this.router.navigate(['register']);
            } else {
              this.user = res[0];
            }
          });
      } else {
        this.router.navigate(['register']);
      }
    });
  }

  sendBidd() {
    this.reloadUser();
  }
}
