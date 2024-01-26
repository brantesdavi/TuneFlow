import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HorizontalListModule } from './shared/horizontal-list/horizontal-list.module';
import { HeaderModule } from './shared/header/header.module';

@NgModule({
  imports: [CommonModule , HorizontalListModule, HeaderModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
