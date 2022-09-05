import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPPageRoutingModule } from './horario-p-routing.module';

import { HorarioPPage } from './horario-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPPageRoutingModule
  ],
  declarations: [HorarioPPage]
})
export class HorarioPPageModule {}
