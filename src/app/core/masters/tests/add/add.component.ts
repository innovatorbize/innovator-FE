import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../../../login.service';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, DropdownModule, RouterLink, FloatLabelModule]

})
export class AddTestComponent {
  formGroup!: FormGroup;
  statuslist: any = [
    { name: 'Enabled', code: 1 },
    { name: 'Disabled', code: 0 }
  ];

  testData: any = {};
  userId : any = '';

  constructor(private loginservice: LoginService, private route: ActivatedRoute, private router : Router) {
    this.route.queryParamMap.subscribe(params => {
      if(params.has('id'))
      {
        this.userId = params.get('id');
        this.loginservice.geteditData(this.userId).subscribe(
          response => {
            this.testData = response.result;
            if(this.testData.status == 0)
            {
              this.testData.status = { name: 'Disabled', code: 0 };
            }
            else
            {
              this.testData.status = { name: 'Enabled', code: 1 };
            }
            console.log('Data successfully sent', this.testData);
          }
        )

      }
    });
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  save() {
    console.log(this.testData);
    this.loginservice.postData(this.testData).subscribe(
      response => {
        console.log('Data successfully sent', response);
        if(response.result == true)
        {
          this.router.navigate(['/masters/tests/list']);
        }
      }
    )
  }

}
