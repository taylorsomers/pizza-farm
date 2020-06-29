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
});