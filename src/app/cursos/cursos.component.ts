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

  columnasC: string[] = ['nombreCurso', 'descripcion'];

  datosC: Curso[] = [new Curso('intro1', 'introprueba'),
    new Curso('intro2', 'introprueba2'),
    new Curso('intro1', 'intropruebafff'),
    new Curso('intro2', 'introprueba2ffff'),
  ];

  cursoselect: Curso = new Curso("", "");

  @ViewChild(MatTable) tabla2!: MatTable<Curso>;

  ngAfterViewInit() {
    console.log(this.tabla2);
  }

  agregar() {
    this.datosC.push(new Curso(this.cursoselect.nombreCurso, this.cursoselect.descripcion));
    this.tabla2.renderRows();
  }

  seleccionarcurso(CursoA: any) {
    this.cursoselect = CursoA;
  }
}


export class Curso {
  constructor(public nombreCurso: string, public descripcion: string) {
  }
}
