import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

    /** register ctor */
  constructor(private authService: AuthService, private alertify: AlertifyService) {

  }
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
        this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
