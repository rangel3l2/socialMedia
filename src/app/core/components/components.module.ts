import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const COMPONENTS = [
  TesteComponent,
  SidebarrightComponent,
  SidebarComponent,
  FooterComponent,
  HeaderComponent
]

@NgModule({
  declarations: [
    TesteComponent,
    COMPONENTS,
    
   
   
  ],
  imports: [
    MaterialModule,
    CommonModule,
    
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
