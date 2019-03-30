import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';

@Component({
  selector: 'l3co-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  tryFacebookLogin() {
    this.userService.doFacebookLogin()
      .then(() => {
      });
  }

  tryGithubLogin() {
    this.userService.doGithubLogin()
      .then(() => {
      });
  }

  tryGoogleLogin() {
    this.userService.doGoogleLogin()
      .then(() => {
      });
  }
}
