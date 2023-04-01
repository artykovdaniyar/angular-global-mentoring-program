import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesGalleryComponent } from './courses-gallery.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CoursesMoreComponent } from './courses-more/courses-more.component';

@NgModule({
  declarations: [
    CoursesGalleryComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesSearchComponent,
    CoursesMoreComponent,
  ],
  imports: [CommonModule],
  exports: [
    CoursesGalleryComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesSearchComponent,
    CoursesMoreComponent,
  ],
})
export class CoursesGalleryModule {}
