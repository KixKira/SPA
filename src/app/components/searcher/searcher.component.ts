import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {
  
  albums:any[] = []
  termino!: string;
  

  constructor(private activatedRoute:ActivatedRoute,
              private _albumsService: AlbumsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['term'];
      this.albums = this._albumsService.buscarArtista(params['term']);
    });
  }

}
