import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseMarkerDirective } from './course-marker/course-marker.directive';

@NgModule({
  declarations: [CourseMarkerDirective],
  exports: [CourseMarkerDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
