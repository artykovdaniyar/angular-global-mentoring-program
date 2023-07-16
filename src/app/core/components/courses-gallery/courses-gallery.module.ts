import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesGalleryComponent } from './courses-gallery.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CoursesMoreComponent } from './courses-more/courses-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { CoursesInfoCardComponent } from './courses-info-card/courses-info-card.component';

@NgModule({
  declarations: [
    CoursesGalleryComponent,
    CoursesItemComponent,
    CoursesListComponent,
    CoursesSearchComponent,
    CoursesMoreComponent,
    CoursesInfoCardComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
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
