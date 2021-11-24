import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {
  album:any = {};
  constructor(private activateRoute: ActivatedRoute,
              private _albumsService: AlbumsService) {
    this.activateRoute.params.subscribe(params =>{
      this.album = this._albumsService.getAlbum(params['id']);
    });
  }
}
