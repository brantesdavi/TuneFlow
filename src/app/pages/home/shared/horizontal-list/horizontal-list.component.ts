import { Component } from '@angular/core';
import { Album } from '../../../../models/album.model';
import { ALBUMS } from '../../../../../mocks/mock-data';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.sass']

})
export class HorizontalListComponent {

  hoveredAlbum: any;

  albumList: Album[] = ALBUMS

  setHoveredAlbum(album: any) {
    this.hoveredAlbum = album;
  }
  
  clearHoveredAlbum() {
    this.hoveredAlbum = null;
  }
}
