import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'masters', loadChildren: () => import('./core/masters/masters.routing').then(m => m.MasterRoutingModule) },
  { path: 'home', loadChildren: () => import('./core/home/home.routing').then(m => m.HomeRoutingModule) },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.routing').then(m => m.AuthRoutingModule) },

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
