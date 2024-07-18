import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomNumberboxComponent } from '../../../components/custom-numberbox/custom-numberbox.component';
import { CustomSelectBoxComponent } from '../../../components/custom-selectbox/custom-selectbox.component';
import { CustomTextboxComponent } from '../../../components/custom-textbox/custom-textbox.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { LoginService } from '../../../login.service';
import { LocalStorageService } from '../../services/local-stroage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule, CustomNumberboxComponent, CustomSelectBoxComponent, CustomTextboxComponent, ReactiveFormsModule, ButtonModule, InputTextModule]
})
export class LoginComponent {
  formGroup!: FormGroup;
  loginData : any = {
  };

  constructor(private loginservice : LoginService, private localstr : LocalStorageService, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone_no: new FormControl('', Validators.required),
    });
  }

  roles: any = [
    { key: 'admin', value: 'Administrator' },
    { key: 'user', value: 'User' },
    { key: 'guest', value: 'Guest' }
  ]

  save() {
    console.log(this.loginData);
    this.loginservice.signinUser(this.loginData).subscribe(
      response => {
        console.log(response.result.log);
        if(response.result.log)
        {
          this.localstr.setItem('authorization', response.result.jwt);
          console.log('Data successfully sent');
          this.router.navigate(['/home']);
        }
      }
    )
  }
}
