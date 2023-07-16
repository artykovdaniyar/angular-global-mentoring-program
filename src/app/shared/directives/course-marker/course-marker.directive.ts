import {
  Directive,
  AfterViewChecked,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';
import { DateTimeService } from '../../../core/services/date-time/date-time.service';

@Directive({
  selector: '[courseMarker]',
})
export class CourseMarkerDirective implements OnInit, AfterViewChecked {
  @Input() creationDate!: number;
  currentDate!: number;
  isCourseNew?: boolean;
  isCourseInDevelopment?: boolean;

  constructor(
    private el: ElementRef,
    private r: Renderer2,
    private dataTimeService: DateTimeService
  ) {}

  ngOnInit(): void {
    if (!this.creationDate) {
      return;
    }

    this.currentDate = this.dataTimeService.getCurrentDate();
    this.creationDate = this.dataTimeService.getMiniSecondsTimeStamp(
      this.creationDate
    );
    this.isCourseNew =
      this.currentDate > this.creationDate &&
      this.creationDate >=
        this.currentDate - this.dataTimeService.getMiniSecondsFromDay(14);

    this.isCourseInDevelopment = this.creationDate > this.currentDate;
  }

  ngAfterViewChecked() {
    if (this.isCourseNew) {
      this.r.addClass(this.el.nativeElement, 'card--new');
    } else if (this.isCourseInDevelopment) {
      this.r.addClass(this.el.nativeElement, 'card--in-development');
    }
  }
}
