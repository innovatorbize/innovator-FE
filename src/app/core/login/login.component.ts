import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomNumberboxComponent } from '../../components/custom-numberbox/custom-numberbox.component';
import { CustomSelectBoxComponent } from '../../components/custom-selectbox/custom-selectbox.component';
import { CustomTextboxComponent } from '../../components/custom-textbox/custom-textbox.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule, CustomNumberboxComponent, CustomSelectBoxComponent, CustomTextboxComponent, ReactiveFormsModule, ButtonModule, InputTextModule]
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  roles: any = [
    { key: 'admin', value: 'Administrator' },
    { key: 'user', value: 'User' },
    { key: 'guest', value: 'Guest' }
  ]

  load() {

  }
}
