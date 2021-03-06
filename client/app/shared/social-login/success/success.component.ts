import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {AlertService} from '../../../services/alert.service';
import {WindowService} from '../../../services/window.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private alertService: AlertService,
              private windowService: WindowService) { }

  ngOnInit() {
    this.authenticationService.getSocialProfile().subscribe( user => {
      let nombre = this.authenticationService.getUser().login;
      if (this.authenticationService.getUser().perfil && this.authenticationService.getUser().perfil.display_name) {
        nombre = this.authenticationService.getUser().perfil.display_name;
      }

      this.alertService.success('Bienvenido ' + nombre, true );
    },
      error => (this.alertService.error('Ha ocurrido un error')));

    this.closeWindowTimer();
  }

  closeWindowTimer() {
    window.setTimeout(() => {
      this.windowService.nativeWindow.close();
    }, 3000);
  }

}
