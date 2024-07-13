import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { CustomNumberboxComponent } from '../../../components/custom-numberbox/custom-numberbox.component';
import { CustomSelectBoxComponent } from '../../../components/custom-selectbox/custom-selectbox.component';
import { CustomTextboxComponent } from '../../../components/custom-textbox/custom-textbox.component';
import { LoginService } from '../../../login.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true,
  imports: [FormsModule, CustomNumberboxComponent, NgIf, CustomSelectBoxComponent, CustomTextboxComponent, ReactiveFormsModule, ButtonModule, InputTextModule]
})
export class RegisterComponent {
  formGroup!: FormGroup;
  loginData: any = {
    username: 'premkumar',
    email: 'email@gmail.com',
    phone_no: '5764839405',
    password: '23456234'
  };
  loginDataSubmitted : boolean = false;

  constructor(private loginservice: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_no: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  roles: any = [
    { key: 'admin', value: 'Administrator' },
    { key: 'user', value: 'User' },
    { key: 'guest', value: 'Guest' }
  ]

  save() {
    console.log(this.loginData);
    this.loginservice.saveSignUp(this.loginData).subscribe(
      response => {
        if (response.result.log) {
          console.log('Data successfully sent', response);
          this.router.navigate(['/login']
          );
        }
        else
        {
          console.log('Already exits', response);
          this.loginDataSubmitted = true;
        }
      }
    )
  }
}
