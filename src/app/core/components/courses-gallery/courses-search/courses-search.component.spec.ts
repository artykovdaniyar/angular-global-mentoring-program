import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesSearchComponent } from './courses-search.component';
import { CoursesGalleryModule } from '../courses-gallery.module';

describe('CoursesSearchComponent', () => {
  let component: CoursesSearchComponent;
  let fixture: ComponentFixture<CoursesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesGalleryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term on searchCourses()', () => {
    spyOn(component.onSearch, 'emit');
    component.searchTerm = 'test';
    component.searchCourses();
    expect(component.onSearch.emit).toHaveBeenCalledWith('test');
  });
});
