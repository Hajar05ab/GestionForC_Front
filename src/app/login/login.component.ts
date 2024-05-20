import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  error: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        console.log('Authentification réussie');
        // Redirection vers /dashboard après l'authentification réussie
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Erreur d\'authentification:', error);
        this.error = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    );
  }
}
