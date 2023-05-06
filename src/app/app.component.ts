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

  datoscopia: Estudiante[] = [new Estudiante(1, 'papas', 'aaa'),
  new Estudiante(2, 'manzanas', 'ddd'),
  new Estudiante(33, 'naranjas', 'hgd'),
  ];
 
  estudianteselect: Estudiante = new Estudiante(null, "", "");

  @ViewChild(MatTable) table1!: MatTable<Estudiante>;

  seleccionarId(Id: any){
    this.IdEstudiante = Id;
  }

  buscarID(idEs: number) {
    this.datos = idEs != null ? this.datoscopia.filter(x => x.identificacion == idEs) : this.datoscopia;
    this.table1.renderRows();
  }

  limpiarfiltro() {
    this.datos = this.datoscopia;
    this.table1.renderRows();
    this.estudianteselect.identificacion = null;
  }
}


export class Estudiante {
  constructor(public identificacion: any, public nombre: string, public apellido: string) {
  }
}



