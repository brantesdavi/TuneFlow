import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  imports: [CommonModule, SearchBarModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
