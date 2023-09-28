import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FooterBarComponent } from './footerbar/footerbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


const COMPONENTS = [
  TesteComponent,
  SidebarrightComponent,
  SidebarComponent,
  FooterBarComponent,
  HeaderComponent,
  LoginComponent,
  RegisterComponent,
]

@NgModule({
  declarations: [
    TesteComponent,
    COMPONENTS,
    
    
    
    
   
   
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
