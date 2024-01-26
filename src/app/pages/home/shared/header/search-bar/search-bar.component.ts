import { Component } from '@angular/core';
import { ALBUMS } from '../../../../../../mocks/mock-data';
import { Album } from '../../../../../models/album.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {

  termoDeBusca: string = '';
  albumsFiltrados: Album[] = [];

  ngOnInit() {
  }

  atualizarResultados() {
    if(this.termoDeBusca){
      this.albumsFiltrados = ALBUMS.filter(album =>
        album.title.toLowerCase().includes(this.termoDeBusca.toLowerCase())
      );
    }
  }

}
