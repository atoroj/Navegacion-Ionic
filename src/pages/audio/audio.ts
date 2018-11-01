import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ANIMALES } from "../../data/data.animales";

import { Animal } from "../../interfaces/animal.interface";
import { reorderArray }  from "ionic-angular";

/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audio',
  templateUrl: 'audio.html',
})
export class AudioPage {
  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animales = ANIMALES.slice(0);
  }
  reproducir( animal:Animal ){

    this.pausar_audio( animal );

    if( animal.reproduciendo ){
      animal.reproduciendo = false;
      return;
    }

    console.log( animal );

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    console.log("Animales reproduciendo");
    animal.reproduciendo = true;

    this.audioTiempo = setTimeout( ()=> animal.reproduciendo = false, animal.duracion * 1000  );
    

  }
  private pausar_audio( animalSel:Animal ){

    clearTimeout( this.audioTiempo );

    this.audio.pause();
    this.audio.currentTime = 0;


    for(  let animal of this.animales ){

      if( animal.nombre != animalSel.nombre ){
        animal.reproduciendo = false;
        console.log("Audio pausado");
      }

    }
    
  }
  borrar_animal( idx:number ){

    this.animales.splice( idx, 1 );
    console.log("Animal eliminado");
  }
  recargar_animales( refresher ){

    console.log("Inicio del refresh");

    setTimeout( ()=>{

          console.log("Termino el refresh");
          this.animales = ANIMALES.slice(0);
          refresher.complete();

    },1500)
      console.log("Animales recargados");
  }
  reordenar_animales( indices:any ){

    console.log(indices);
    this.animales = reorderArray( this.animales, indices );
    console.log("Animal reordenado")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioPage');
  }

}
