import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../servicios/noticia.service';
import { Article } from '../../modelos/noticia';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias : Article[] = [];
  constructor(private noticiasServicios: NoticiaService) {}
  ngOnInit() {
    this.noticiasServicios.getNoticias()
      .subscribe((resultado) => {
        this.noticias.push(...resultado.articles);
      });
  }
  
}
