import { AppMaterialModule } from './../compartilhado/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Módulos externos remotos
import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';
//Módulos internos

@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    AppMaterialModule
  ]
})
export class CddModule { }
