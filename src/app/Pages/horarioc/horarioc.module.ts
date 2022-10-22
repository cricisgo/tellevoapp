import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariocPageRoutingModule } from './horarioc-routing.module';

import { HorariocPage } from './horarioc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariocPageRoutingModule
  ],
  declarations: [HorariocPage]
})
export class HorariocPageModule {}
