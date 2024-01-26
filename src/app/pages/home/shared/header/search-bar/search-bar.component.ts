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
    // Inicialmente, exiba todos os álbuns
  }

  atualizarResultados() {
    // Filtrar álbuns com base no termo de pesquisa no título
    this.albumsFiltrados = ALBUMS.filter(album =>
      album.title.toLowerCase().includes(this.termoDeBusca.toLowerCase())
    );
  }

}
