import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { Bidder } from '../interfaces/bidder';

@Injectable()
export class ApiService {
  private gameServer = 'https://dhbw-gameserver.cfapps.io/api';

  constructor(private http: HttpClient) {}

  getInfo(): Promise<any> {
    return this.http.get(`${this.gameServer}/info`).toPromise();
  }

  getHealthCheck(): Promise<any> {
    return this.http.get(`${this.gameServer}/health`).toPromise();
  }

  registerBidder(user: User): Promise<any> {
    return this.http
      .post(`${this.gameServer}/registerBidder`, user)
      .toPromise();
  }

  getBidder(name: string) {
    return this.http.get<Bidder>(`${this.gameServer}/bidder/${name}`);
  }

  getAllBidders(): Observable<Bidder[]> {
    return this.http.get<Bidder[]>(`${this.gameServer}/allBidders`);
  }
}
