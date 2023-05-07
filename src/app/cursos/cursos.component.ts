import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html', 
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements OnInit {

  @Input() IdEstudiante: any;
  constructor() {

  }

  listacursos: Curso[] = [];
  obtenercursos: Curso[] = [];
  asignados: any[] = [];

  ngOnInit() {
    fetch('http://localhost:5274/api/Curso/ListaCurso').then((response) => response.json()).then(x => this.listacursos = x.response);
    fetch('http://localhost:5274/api/EstudianteCurso/ListaEstudianteCurso').then((response) => response.json()).then(x => this.asignados = x.response);
    //this.CargarCursos();
    fetch(`http://localhost:5274/api/EstudianteCurso/ObtieneEstudianteCurso/${this.IdEstudiante}`).then((response) => response.json()).then(x => console.log("jgjg: ", x.response));
    console.log(`http://localhost:5274/api/EstudianteCurso/ObtieneEstudianteCurso/${this.IdEstudiante}`, this.IdEstudiante)

  }

  

  columnasC: string[] = ['nombreCurso', 'descripcion', 'eliminar'];

  cursoselect: Curso = new Curso("", "");

  @ViewChild(MatTable) tabla2!: MatTable<Curso>;

  ngAfterViewInit() {
    console.log(this.tabla2);
  }

  CargarCursos() {
    this.obtenercursos = this.IdEstudiante != null ? this.asignados.filter(x => x.identificacion == this.IdEstudiante) : this.asignados;
  }

  agregar() {

    const str = new String(this.cursoselect).split(',')
    let repetido = true;
    this.listacursos.map(x => x.nombreCurso.includes(str[0]) && (repetido = false))
    repetido && this.listacursos.push(new Curso(str[0], str[1]));
    this.tabla2.renderRows();
  }

  borrar(bor: string) {

    this.listacursos = this.listacursos.filter(x => x.nombreCurso != bor);
    this.tabla2.renderRows();
  }
}

export class Curso {
  constructor(public nombreCurso: string, public descripcion: string) {
  }
}
