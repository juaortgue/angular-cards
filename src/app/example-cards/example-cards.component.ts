import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-cards',
  templateUrl: './example-cards.component.html',
  styleUrls: ['./example-cards.component.scss']
})
export class ExampleCardsComponent implements OnInit {

  public objectsExample;
  constructor() { }

  ngOnInit() {
    this.objectsExample =
      [{
        nombre: "Juan",
        apellidos: "Pérez Gómez",
        tarea: "Limpiar el comedor"
      },
      {
        nombre: "Luís",
        apellidos: "Sánchez Rodríguez",
        tarea: "Arreglar lampara"
      },
      {
        nombre: "Juan José",
        apellidos: "Ortiz Gomedo",
        tarea: "Programar dispositivo"
      }
      ]


  }
  onCardClick(){
    alert('On card click');
  }

}
