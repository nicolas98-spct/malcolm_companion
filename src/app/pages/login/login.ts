import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  loading = signal(false);

  constructor(private router: Router) {}
  entrar() {
  
    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      this.router.navigate(['/perfil']);
    }, 250);
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
}
