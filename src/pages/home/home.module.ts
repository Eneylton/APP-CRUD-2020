import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    BrMaskerModule
  ],
})
export class HomePageModule {}