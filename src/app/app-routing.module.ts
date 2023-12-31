import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './core/layout/default/default.component';
import { authGuard } from './core/auth/auth.guard.service';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { RecordComponent } from './core/components/record/record.component';

const routes: Routes = [
  {
    path: 'login',  
    component: LoginComponent,

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {    
    path: '',
    component : DefaultComponent,
    canActivate:[()=> inject(authGuard).canActivate()],
    children: [
      {
        path: 'record',
        component: RecordComponent
      },
      
      
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
