describe('gasStation', () => {
  const canCompleteCircuit = require('./gasStation.js').canCompleteCircuit;

  it('passes test case 1.', () => {
    const cost = [3,4,5,1,2];
    const gas  = [1,2,3,4,5];
    expect(canCompleteCircuit(cost, gas)).toBe(3);
  });

  it('passes test case 2.', () => {
    const gas  = [2,3,4];
    const cost = [3,4,3];
    expect(canCompleteCircuit(cost, gas)).toBe(-1);
  });
});