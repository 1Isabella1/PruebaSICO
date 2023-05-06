import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:5274/api/";
  }

  //funciones de listar



  //Funciones para tabla relacion

  public getPosts() {
    let endPoints = ""
    this.httpClient.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  public addPost(body: any) {
    let endPoints = "EstudianteCurso/Agregar"
    this.httpClient.post(this.url + endPoints, body).subscribe(data => {
      console.log(data);
    });
  }

  public deletePost(body: any) {
    let endPoints = "EstudianteCurso/Borrar"
    this.httpClient.delete(this.url + endPoints + body).subscribe(data => {
      console.log(data);
    });
  }


  
}
