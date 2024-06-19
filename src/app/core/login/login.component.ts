import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from "@angular/common";
import { CustomNumberboxComponent } from '../../components/custom-numberbox/custom-numberbox.component';
import { CustomSelectBoxComponent } from '../../components/custom-selectbox/custom-selectbox.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true,
  imports : [FormsModule, CustomNumberboxComponent, CustomSelectBoxComponent]
})
export class LoginComponent {

}
