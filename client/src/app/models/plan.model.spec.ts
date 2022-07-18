import { Plan } from './plan.model';

describe('Plan', () => {
  it('should create an instance', () => {
    expect(new Plan(1, "Plan1")).toBeTruthy();
  });
});
