import { NgIf } from '@angular/common';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-numberbox',
  templateUrl: './custom-numberbox.component.html',
  styleUrls: ['./custom-numberbox.component.scss'],
  standalone : true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomNumberboxComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomNumberboxComponent),
      multi: true
    }
  ],
  imports : [ReactiveFormsModule, NgIf]
})
export class CustomNumberboxComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() label!: string;
  @Input() min!: number;
  @Input() max!: number;
  @Input() placeholder!: string;

  control = new FormControl('');

  private onTouched!: () => void;
  private onChanged!: (value: any) => void;

  constructor() { }

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
