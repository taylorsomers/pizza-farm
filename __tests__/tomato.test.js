import { Tomato } from './../src/tomato.js';

describe('Tomato', () => {
  jest.useFakeTimers();
  let tomato;

  beforeEach(function() {
    tomato = new Tomato();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should create a tomato object with a water level of 30', () => {
    expect(tomato.waterLevel).toEqual(30);
  });
  test('should decrement tomato water level by 1 every second', () =>{
    jest.advanceTimersByTime(1001);
    expect(tomato.waterLevel).toEqual(29);
  });
});