import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestListComponent } from "./list/list.component";
import { AddTestComponent } from "./add/add.component";

const routes: Routes = [
        { path: 'list', component: TestListComponent },
        { path: '', component: AddTestComponent },
  ];
  

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class TestsRoutingModule { }
