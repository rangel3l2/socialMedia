import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './core/layout/default/default.component';
import { TesteComponent } from './core/components/teste/teste.component';
const routes: Routes = [
  {
    path: '',
    component : DefaultComponent,
    children:[
      {
        path:'',
        component: TesteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
