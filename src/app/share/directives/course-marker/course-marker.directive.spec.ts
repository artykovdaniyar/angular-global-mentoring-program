import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseMarkerDirective } from './course-marker.directive';

@Component({
  template: `
    <div class="card" courseMarker [creationDate]="creationDate"></div>
  `,
})
class TestComponent {
  creationDate?: number;
}

describe('CourseMarkerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CourseMarkerDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(
      By.directive(CourseMarkerDirective)
    );
  });

  it('should add "card--new" class when course is new', () => {
    component.creationDate = Date.now() - 1000; // Course created 1 second ago
    fixture.detectChanges();

    expect(
      directiveElement.nativeElement.classList.contains('card--new')
    ).toBeTrue();
    expect(
      directiveElement.nativeElement.classList.contains('card--in-development')
    ).toBeFalse();
  });

  it('should add "card--in-development" class when course is in development', () => {
    component.creationDate = Date.now() + 1000; // Course created 1 second in the future
    fixture.detectChanges();

    expect(
      directiveElement.nativeElement.classList.contains('card--in-development')
    ).toBeTrue();
    expect(
      directiveElement.nativeElement.classList.contains('card--new')
    ).toBeFalse();
  });

  it('should not add any classes when course is not new or in development', () => {
    component.creationDate = 1606845600000; // Course created a long time ago (02 Dec 2020)
    fixture.detectChanges();

    expect(
      directiveElement.nativeElement.classList.contains('card--new')
    ).toBeFalse();
    expect(
      directiveElement.nativeElement.classList.contains('card--in-development')
    ).toBeFalse();
  });
});
