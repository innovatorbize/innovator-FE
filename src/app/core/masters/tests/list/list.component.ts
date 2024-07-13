import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../../../login.service';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, MatTableModule, RouterLink, MatMenuModule]

})
export class TestListComponent {
  loginData: any = [];
  datasource = {};

  displayedColumns: string[] = ['position', 'name', 'status', 'option'];

  constructor(private loginservice: LoginService, private router: ActivatedRoute) {
    this.loginservice.getData(this.loginData).subscribe(
      response => {
        this.loginData = response.result;
        this.datasource = this.loginData;
        console.log('Data successfully sent', this.datasource);
      }
    )
  }

  deleteTest(id: any) {
    this.loginservice.DeleteData(id).subscribe(
      response => {
        this.loginData = response.result;
        console.log('Deleted successfully', this.loginData);
      }
    )
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload()
  }

  ngOnInit() {

  }

}
