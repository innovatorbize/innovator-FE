import { Component } from '@angular/core';
import { AppTopComponent } from '../../layout/app-top.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone : true,
  imports : [AppTopComponent]
})
export class HomeComponent {

}
