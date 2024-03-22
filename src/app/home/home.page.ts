import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // ventana1Color: string = 'lightblue';
  // ventana2Color: string = 'lightblue';
  // ventana3Color: string = 'lightblue';
  // ventana4Color: string = 'lightblue';
  // ventana5Color: string = 'lightblue';
  // ventana6Color: string = 'lightblue';
  

  constructor(private database:Database) {}

  ngOnInit(): void {
    const route = ref(this.database,'/casa');
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db.banio);//Imprimir valores obtenidos de la busqueda en la ruta 
    });

  }
  
}
