import { Device } from './device.model';

describe('Device', () => {
  it('should create an instance', () => {
    expect(new Device(1, "Device1")).toBeTruthy();
  });
});
