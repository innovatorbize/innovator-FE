import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true,
  imports : [FormsModule]
})
export class LoginComponent {

}
