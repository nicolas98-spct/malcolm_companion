import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  email = signal('');
  password = signal('');
  loading = signal(false);

  constructor(private router: Router) {}

  async entrar() {
    this.loading.set(true);
    await new Promise((r) => setTimeout(r, 250));
    this.loading.set(false);
    this.router.navigateByUrl('/inicio');
  }
}

