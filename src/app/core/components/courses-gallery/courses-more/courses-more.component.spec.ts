import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesMoreComponent } from './courses-more.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CoursesMoreComponent', () => {
  let component: CoursesMoreComponent;
  let fixture: ComponentFixture<CoursesMoreComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesMoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesMoreComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onSearch event when loadMore() is called', () => {
    spyOn(component.onSearch, 'emit');
    component.loadMore();
    expect(component.onSearch.emit).toHaveBeenCalled();
  });

  it('should render the "Load More" button', () => {
    const button = el.query(By.css('.more-btn')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Load More');
  });

  it('should call loadMore() when the "Load More" button is clicked', () => {
    spyOn(component, 'loadMore');
    const button = el.query(By.css('.more-btn')).nativeElement;
    button.click();
    expect(component.loadMore).toHaveBeenCalled();
  });
});
