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

  isListClosed: boolean = false;

  toggleList(){
    this.isListClosed = !this.isListClosed;
    console.log(this.isListClosed)
  }

  setHoveredAlbum(album: any) {
    this.hoveredAlbum = album;
  }
  
  clearHoveredAlbum() {
    this.hoveredAlbum = null;
  }

  calculateTotalDuration(album: Album): number {
    return album.musics.reduce((total, music) => total + music.duration, 0);
  }

  formatDuration(duration: number): string {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    } else if (minutes > 0) {
      return `${minutes}min ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }
}
