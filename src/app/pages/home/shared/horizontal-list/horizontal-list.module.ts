import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorizontalListComponent } from './horizontal-list.component';
import { AlbumModule } from '../../../../components/album/album.module';


@NgModule({
  imports: [CommonModule, AlbumModule],
  declarations: [HorizontalListComponent],
  exports: [HorizontalListComponent],
})
export class HorizontalListModule {}

