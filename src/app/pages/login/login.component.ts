import { Component } from '@angular/core';
import { InputComponent } from '../../components/forms/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationErrorPipe } from '../../pipe/validation_error_input.pipe';
import { RouterModule } from '@angular/router';

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
  initialForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('fORM', this.initialForm.value);
    this.initialForm.reset();
  }
}
