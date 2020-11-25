import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballmatchPageRoutingModule } from './footballmatch-routing.module';

import { FootballmatchPage } from './footballmatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootballmatchPageRoutingModule
  ],
  declarations: [FootballmatchPage]
})
export class FootballmatchPageModule {}
