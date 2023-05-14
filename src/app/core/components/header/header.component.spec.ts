import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '../components.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = 'video courses';
    component.title = title;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector(
      '.header__icon-title'
    );
    expect(titleElement.textContent).toContain(title);
  });

  it('should have user login and logoff links', () => {
    const loginLink = fixture.nativeElement.querySelector(
      '.registration__link[href="/login"]'
    );
    const logoffLink = fixture.nativeElement.querySelector(
      '.registration__link[href="/sign-in"]'
    );
    expect(loginLink.textContent).toContain('User Login');
    expect(logoffLink.textContent).toContain('Log off');
  });
});
