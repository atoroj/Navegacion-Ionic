import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
import { PERSONAJES } from "../../data/personajes.data";
import { Contacto } from "../../interfaces/contacto.interface";
/**
 * Generated class for the LlamadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-llamadas',
  templateUrl: 'llamadas.html',
})
export class LlamadasPage {
  contactos:Contacto[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactos = PERSONAJES.slice(0);
  }
  irInformacion( contacto:any ){

    console.log( contacto );

    this.navCtrl.push( InformacionPage, { 'propiedad': contacto  } );

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LlamadasPage');
  }

}
