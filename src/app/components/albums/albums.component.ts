import { Component, OnInit } from '@angular/core';
import { AlbumsService, Albums } from '../../services/albums.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  albums:Albums[] = [];

  constructor(private _albumsService: AlbumsService,
              private _router: Router) {
    
  }

  ngOnInit(): void {
    this.albums = this._albumsService.getAlbums();
  }

  verAlbum(idx:number){
    this._router.navigate(['/album', idx])
  }

}
