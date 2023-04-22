import { Component } from '@angular/core';
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
  constructor() {}
}
