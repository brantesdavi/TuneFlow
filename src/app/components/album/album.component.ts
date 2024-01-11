import { Component, Input } from '@angular/core';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent {  
  
  @Input() album: Album | undefined;
}
