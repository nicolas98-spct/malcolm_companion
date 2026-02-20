import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService, UserCreate } from '../../services/users.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent {
  form: UserCreate = {
    names: '',
    email: '',
    age: 0,
  };

  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private users: UsersService, private router: Router) {}

  submit() {
    this.errorMsg = '';
    this.successMsg = '';

    if (!this.form.names.trim() || !this.form.email.trim()) {
      this.errorMsg = 'Completa Nombres y Correo.';
      return;
    }

    const ageNum = Number(this.form.age);
    if (!Number.isFinite(ageNum) || ageNum <= 0) {
      this.errorMsg = 'Edad inválida.';
      return;
    }

    this.loading = true;

    // Validar correo duplicado
    this.users.getUserByEmail(this.form.email.trim()).subscribe({
      next: (exists) => {
        if (exists.length > 0) {
          this.loading = false;
          this.errorMsg = 'Ya existe un usuario con ese correo.';
          return;
        }

        this.users.createUser({
          names: this.form.names.trim(),
          email: this.form.email.trim(),
          age: ageNum,
        }).subscribe({
          next: () => {
            this.loading = false;
            this.successMsg = 'Registro exitoso.';
            setTimeout(() => this.router.navigate(['/login']), 700);
          },
          error: () => {
            this.loading = false;
            this.errorMsg = 'No se pudo registrar. Revisa tu URL de MockAPI.';
          },
        });
      },
      error: () => {
        this.loading = false;
        this.errorMsg = 'Error validando correo. Revisa tu URL de MockAPI.';
      },
    });
  }
}
