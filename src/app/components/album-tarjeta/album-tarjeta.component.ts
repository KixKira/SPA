import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-album-tarjeta',
  templateUrl: './album-tarjeta.component.html'
})
export class AlbumTarjetaComponent implements OnInit {

  @Input() album: any = {};
  @Input() i!: number;

  @Output() albumSelect: EventEmitter<number>;

  constructor(private router: Router) {
    this.albumSelect = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verAlbum() {
    this.router.navigate(['/album', this.i]);
    //this.albumSelect.emit(this.i);
  }

}
