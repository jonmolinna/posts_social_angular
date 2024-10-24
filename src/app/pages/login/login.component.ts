import { Component, inject } from '@angular/core';
import { InputComponent } from '../../components/forms/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationErrorPipe } from '../../pipe/validation_error_input.pipe';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { authInput, authResponse } from '../../interface/auth.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ValidationErrorPipe,
    RouterModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  initialForm: FormGroup;
  loading: boolean = false;
  disabledButton: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form: authInput = this.initialForm.value;
    this.loading = true;
    this.disabledButton = true;

    this.authService.authentication(form).subscribe({
      next: (data: authResponse) => {
        this.loading = false;
        this.disabledButton = false;
        this.router.navigate(['']);
        localStorage.setItem('ang_access_token', data.token);
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.disabledButton = false;

        if (error.status === 400) {
          this.toastr.error('Credenciales Incorrectos', 'Error');
        }
        if (error.status === 401) {
          this.toastr.error('Credenciales Incorrectos', 'Error');
        } else {
          this.toastr.error('Error', 'Error en el servidor');
        }
      },
    });

    this.initialForm.reset();
  }
}
