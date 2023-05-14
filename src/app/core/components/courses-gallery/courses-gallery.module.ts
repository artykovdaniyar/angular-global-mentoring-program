import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesGalleryComponent } from './courses-gallery.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CoursesMoreComponent } from './courses-more/courses-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoursesGalleryComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesSearchComponent,
    CoursesMoreComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [
    CoursesGalleryComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesSearchComponent,
    CoursesMoreComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesGalleryModule {}
