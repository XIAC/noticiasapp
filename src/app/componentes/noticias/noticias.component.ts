import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../modelos/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  @Input() noticiasLista : Article [] = [];
  constructor() { }

  ngOnInit() {}

}
