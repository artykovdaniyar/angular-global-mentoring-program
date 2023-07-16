import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe],
  exports: [DurationPipe, OrderByPipe, FilterPipe],
  imports: [CommonModule],
})
export class PipesModule {}
