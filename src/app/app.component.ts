import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso-Angular-REST';
  usuario = { login : '', senha : '' };
  public login() {
    console.log(`Login: ${this.usuario.login}\n Senha:${this.usuario.senha}`);
  }
}
