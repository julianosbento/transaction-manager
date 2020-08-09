import { getTimeFormat } from '../../../src/utils';
import { time, expectedFormatedTime } from './time.dummy';

describe('Time Utils', () => {
  it('should get formated time', () => {
    const formatedTime = getTimeFormat(time);

    expect(formatedTime).toEqual(expectedFormatedTime);
  });
});
