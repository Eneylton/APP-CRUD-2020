import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DasheboardPage } from './dasheboard';

@NgModule({
  declarations: [
    DasheboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DasheboardPage),
  ],
})
export class DasheboardPageModule {}
