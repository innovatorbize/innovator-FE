import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: 'masters', loadChildren: () => import('./core/masters/masters.routing').then(m => m.MasterRoutingModule),
    canActivate: [AuthGuard]  },
  { path: 'home', loadChildren: () => import('./core/home/home.routing').then(m => m.HomeRoutingModule),
    canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.routing').then(m => m.AuthRoutingModule),
    canActivate: [AuthGuard] },

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
