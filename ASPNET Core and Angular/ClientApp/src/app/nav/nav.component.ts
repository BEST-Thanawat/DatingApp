import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
/** nav component*/
export class NavComponent implements OnInit {
  model: any = {};
  /** nav ctor */
  constructor(private authService: AuthService, private alertify: AlertifyService) {

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
        this.alertify.error('Failed to login');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out')
  }
}
