import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private loginService: LoginServiceService) {}
  title = 'Curso-Angular-REST';
  usuario = { login : '', senha : '' };
  public login() {
    this.loginService.login(this.usuario);
  }

}
