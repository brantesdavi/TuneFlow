import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HorizontalListModule } from './shared/horizontal-list/horizontal-list.module';

@NgModule({
  imports: [CommonModule , HorizontalListModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
