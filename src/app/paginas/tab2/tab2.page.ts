import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modelos/noticia';
import { NoticiaService } from '../../servicios/noticia.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  noticias: Article [] =[];
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(private noticiasServicios :  NoticiaService) {}
  ngOnInit(): void {
    this.cargarNoticias(this.categorias[0]);
  }
  cambiarCategoria(event){
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }
  cargarNoticias(categoria: string){
    this.noticiasServicios.getCategoriasNoticias(categoria)
      .subscribe( resp =>{
        this.noticias.push(...resp.articles);
      });
  }
}
