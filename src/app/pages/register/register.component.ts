import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../components/forms/input/input.component';
import { ValidationErrorPipe } from '../../pipe/validation_error_input.pipe';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ValidationErrorPipe],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  initialForm: FormGroup;
  myText: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.initialForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('>>>', this.initialForm.value);
    this.initialForm.reset();
  }
}
