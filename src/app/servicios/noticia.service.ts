import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../modelos/noticia';
// Optimizar el codigo y utilizar el parametro de categorias
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNoticias(){
    return this.http.get<Respuesta>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4f13656b64774c9ebcc9ca96ee4ba2dd`);
  }
  getCategoriasNoticias(categorias:string){
    return this.http.get<Respuesta>(`http://newsapi.org/v2/top-headlines?country=us&category=${categorias}&apiKey=4f13656b64774c9ebcc9ca96ee4ba2dd`);
  }
}
