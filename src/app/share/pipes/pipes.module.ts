import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';

@NgModule({
  declarations: [DurationPipe],
  exports: [DurationPipe],
  imports: [CommonModule],
})
export class PipesModule {}
