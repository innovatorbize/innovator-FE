import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";

@Component({
  selector: 'app-top',
  templateUrl: './app-top.component.html',
  standalone : true,
  imports : []
})
export class AppTopComponent {

  constructor(public layoutService : LayoutService)
  {

  }

}
