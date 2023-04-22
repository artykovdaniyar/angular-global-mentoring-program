import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesGalleryModule } from './courses-gallery/courses-gallery.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule, CoursesGalleryModule],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    CoursesGalleryModule,
    FooterComponent,
  ],
})
export class ComponentsModule {}
