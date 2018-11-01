import { Component } from '@angular/core';

import { LlamadasPage } from '../llamadas/llamadas';
import { MensajesPage } from '../mensajes/mensajes';
import { AudioPage } from '../audio/audio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LlamadasPage;
  tab2Root = MensajesPage;
  tab3Root = AudioPage;

  constructor() {

  }
}
