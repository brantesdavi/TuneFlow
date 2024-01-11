import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlbumComponent } from './album.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AlbumComponent],
  exports: [AlbumComponent],
})
export class AlbumModule {
}
