import { NgIf } from '@angular/common';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, FormBuilder, FormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-textbox',
  templateUrl: './custom-textbox.component.html',
  styleUrls: ['./custom-textbox.component.scss'],
  standalone : true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomTextboxComponent),
      multi: true
    }
  ],
  imports: [ReactiveFormsModule, NgIf, FormsModule]
})
export class CustomTextboxComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() label!: string;
  @Input() placeholder!: string;

  control = new FormControl('');

  private onTouched!: (value: any) => void;
  private onChanged!: (value: any) => void;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      if (this.onChanged) {
        this.onChanged(value);
      }
    });
  }

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.control.valid ? null : { invalid: true };
  }
}
