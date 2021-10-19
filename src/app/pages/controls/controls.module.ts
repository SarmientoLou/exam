import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlsPageRoutingModule } from './controls-routing.module';

import { ControlsPage } from './controls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlsPageRoutingModule
  ],
  declarations: [ControlsPage]
})
export class ControlsPageModule {}
