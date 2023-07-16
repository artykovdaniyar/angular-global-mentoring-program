import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  getCurrentDate = () => {
    let currentTime = new Date().getTime();
    return currentTime;
  };

  getMiniSecondsFromDay = (number: number) => {
    let miniSec = 24 * 60 * 60 * (1000 * number);
    return miniSec;
  };

  getMiniSecondsTimeStamp = (date: number | Date) => {
    return new Date(date).getTime();
  };
}
