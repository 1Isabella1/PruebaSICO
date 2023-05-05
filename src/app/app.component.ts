import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  IdEstudiante: any;

  columnas: string[] = ['identificacion', 'nombre', 'apellido', 'cursos'];

  datos: Estudiante[] = [new Estudiante(1, 'papas', 'aaa'),
  new Estudiante(2, 'manzanas', 'ddd'),
  new Estudiante(33, 'naranjas', 'hgd'),
  ];

  estudianteselect: Estudiante = new Estudiante(0, "", "");

  @ViewChild(MatTable) table1!: MatTable<Estudiante>;

  seleccionarId(Id: any){
    this.IdEstudiante = Id;
}
 // agregar() {
 //   this.datos.push(new Estudiante(this.estudianteselect.identificacion, this.estudianteselect.nombre, this.estudianteselect.apellido));
   // this.tabla1.renderRows();
   // this.estudianteselect = new Estudiante(0, "", "");
 // }
}


export class Estudiante {
  constructor(public identificacion: number, public nombre: string, public apellido: string) {
  }
}



