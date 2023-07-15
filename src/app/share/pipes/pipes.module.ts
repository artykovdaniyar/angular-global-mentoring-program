import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { FilterPipe } from 'src/app/share/pipes/filter/filter.pipe';

@NgModule({
  declarations: [DurationPipe, FilterPipe],
  exports: [DurationPipe, FilterPipe],
  imports: [CommonModule],
})
export class PipesModule {}
