import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(
    private api: ApiService,
    private router: Router,
    private storage: StorageService
  ) {
    this.user = {
      name: '',
      endpoint: 'https://ddhbw-daniel-sogl.cfapps.io/api/notification'
    };
  }

  ngOnInit() {}

  registerUser() {
    this.api
      .registerBidder(this.user)
      .then(res => {
        console.log('Registerd User', res);
        this.storage.saveUser(this.user).then(() => {
          this.router.navigate(['game']);
        });
      })
      .catch(err => {
        console.error('Error registering user', err);
      });
  }
}
