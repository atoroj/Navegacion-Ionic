import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LlamadasPage } from './llamadas';

@NgModule({
  declarations: [
    LlamadasPage,
  ],
  imports: [
    IonicPageModule.forChild(LlamadasPage),
  ],
})
export class LlamadasPageModule {}
