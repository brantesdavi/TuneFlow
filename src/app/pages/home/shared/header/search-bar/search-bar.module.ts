import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
