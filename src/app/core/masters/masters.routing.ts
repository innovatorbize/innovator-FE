import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'tests', loadChildren: () => import('../masters/tests/tests.routing').then(m => m.TestsRoutingModule) },
  ];
  

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class MasterRoutingModule { }
