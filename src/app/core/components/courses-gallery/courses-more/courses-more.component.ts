import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'courses-more',
  templateUrl: './courses-more.component.html',
  styleUrls: ['./courses-more.component.scss'],
})
export class CoursesMoreComponent {
  @Output() onSearch = new EventEmitter();

  loadMore() {
    this.onSearch.emit();
  }
}
