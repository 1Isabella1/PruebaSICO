import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html', 
  styleUrls: ['./cursos.component.css']
})


export class CursosComponent implements OnInit {

  @Input() asignados: Curso[] = [];
  @Input()  IdEstudiante: any;
  constructor() {
  }

  listacursos: Curso[] = [];
  //agregarpost: CursoE[] = [];
  
  ngOnInit() {
    fetch('http://localhost:5274/api/Curso/ListaCurso').then((response) => response.json()).then(x => this.listacursos = x.response)
  }

  columnasC: string[] = ['nombreCurso', 'descripcion', 'eliminar'];

  cursoselect: Curso = new Curso("", "");

  @ViewChild(MatTable) tabla2!: MatTable<Curso>;

  /// Metodo para agregar cursos a un estudiante
  agregar() {
    let cursoagregar = new String(this.cursoselect).split(',')
    let repetido = true;
    this.asignados.map(x => x.nombreCurso.includes(cursoagregar[0]) && (repetido = false))

    if (!repetido) {
      console.log("Ya existe")  //ventana emergente
    }
    else {
      let agregarpost = new CursoE(this.IdEstudiante, cursoagregar[0])
      console.log(agregarpost)

      fetch('http://localhost:5274/api/EstudianteCurso/Agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(agregarpost)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

      this.asignados.push(new Curso(cursoagregar[0], cursoagregar[1]));
      this.tabla2.renderRows();

    }

  }

  //borrar curso a un estudiante
  borrar(bor: string) {
    let borrapost = new CursoE(this.IdEstudiante, bor);
    console.log(borrapost)
    fetch('http://localhost:5274/api/EstudianteCurso/Borrar', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrapost)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))

    this.asignados = this.asignados.filter(x => x.nombreCurso != bor);
    this.tabla2.renderRows();
  }
}

export class Curso {
  constructor(public nombreCurso: string, public descripcion: string) {
  }
}

export class CursoE {
  constructor(public Identificacion: string, public nombreCurso: string) {
  }
}
