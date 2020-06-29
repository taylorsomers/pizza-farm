import { Farmer } from './../src/farmer.js';

describe("Eustace", () => {
  let eustace;

  beforeEach(function() {
    eustace = new Farmer("Eustace");
  });

  test('should create a new Farmer object with a name', () => {
    expect(eustace.name).toEqual("Eustace");
  });

});