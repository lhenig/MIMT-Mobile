import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1,"Zulmak","zulmak@destiny2.com",[],[])).toBeTruthy();
  });
});
