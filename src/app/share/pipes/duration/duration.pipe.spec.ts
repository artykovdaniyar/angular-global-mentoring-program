import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('transforms 120 to "2 h"', () => {
    expect(pipe.transform(120)).toEqual('2 h');
  });

  it('transforms 60 to "1 h"', () => {
    expect(pipe.transform(60)).toEqual('1 h');
  });

  it('transforms 90 to "1 h 30 min"', () => {
    expect(pipe.transform(90)).toEqual('1 h 30 min');
  });

  it('transforms 30 to "30 min"', () => {
    expect(pipe.transform(30)).toEqual('30 min');
  });
});
