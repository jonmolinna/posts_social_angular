import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccesorDirective } from './control-value-accesor.directive';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from './input.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  extends ControlValueAccesorDirective
  implements InputType
{
  @Input({ required: true }) type: string = 'text';
  @Input() placeholder?: string | undefined = '';
}
