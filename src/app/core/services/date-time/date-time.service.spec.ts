import { TestBed } from '@angular/core/testing';

import { DateTimeService } from './date-time.service';

describe('DateTimeService', () => {
  let service: DateTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the current date in milliseconds', () => {
    const currentDate = new Date();
    const expectedMilliseconds = currentDate.getTime();
    const actualMilliseconds = service.getCurrentDate();

    expect(actualMilliseconds).toEqual(expectedMilliseconds);
  });

  it('should return the number of milliseconds in a specified number of days', () => {
    const numberOfDays = 5;
    const expectedMilliseconds = 24 * 60 * 60 * (1000 * numberOfDays);
    const actualMilliseconds = service.getMiniSecondsFromDay(numberOfDays);

    expect(actualMilliseconds).toEqual(expectedMilliseconds);
  });

  it('should return the number of milliseconds for a given date', () => {
    const date = new Date('2023-07-15');
    const expectedMilliseconds = date.getTime();
    const actualMilliseconds = service.getMiniSecondsTimeStamp(date);

    expect(actualMilliseconds).toEqual(expectedMilliseconds);
  });
});
