import { Component, EventEmitter, Output } from '@angular/core';
import {
  faMagnifyingGlass,
  faArrowRotateRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
})
export class CoursesSearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faArrowRotateRight = faArrowRotateRight;
  searchTerm: string = '';

  @Output() onSearch = new EventEmitter<string>();

  searchCourses() {
    this.onSearch.emit(this.searchTerm);
  }
}
