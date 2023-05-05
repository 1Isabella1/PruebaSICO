import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements AfterViewInit {
  @Input() IdEstudiante: any;
  constructor() { }
  ngOnInit() {
  }

  columnasC: string[] = ['nombreCurso', 'descripcion', 'eliminar'];

  listacursos: Curso[] = [new Curso('intro1', 'introprueba'),
  new Curso('intro2', 'introprueba2'),
  new Curso('intro3', 'intropruebafff'),
  new Curso('intro4', 'introprueba2ffff'),
  ];

  datosC: Curso[] = [new Curso('intro1', 'introprueba'),
    new Curso('intro2', 'introprueba2'),
  ];

  cursoselect: Curso = new Curso("", "");

  @ViewChild(MatTable) tabla2!: MatTable<Curso>;

  ngAfterViewInit() {
    console.log(this.tabla2);
  }

  agregar() {
    const str = new String(this.cursoselect).split(',')
    this.datosC.map(x => x.nombreCurso == str[0] ? alert("Repetido") : this.datosC.push(new Curso(str[0], str[1])));
    this.tabla2.renderRows();
  }

  borrar(bor: string) {

    this.datosC = this.datosC.filter(x => x.nombreCurso != bor );
    this.tabla2.renderRows();
    
  }
}


export class Curso {
  constructor(public nombreCurso: string, public descripcion: string) {
  }
}
