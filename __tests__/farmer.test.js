import { Farmer } from './../src/farmer.js';
import { Tomato } from './../src/tomato.js';

describe("Eustace", () => {
  let eustace;

  beforeEach(function() {
    eustace = new Farmer("Eustace");
  });

  test('should create a new Farmer object with a name', () => {
    expect(eustace.name).toEqual("Eustace");
  });

  test('should create a new Farmer object with a point value of zero', () => {
    expect(eustace.points).toEqual(0);
  });

  test('should add a point to the Farmer object', () => {
    eustace.addPoint();
    expect(eustace.points).toEqual(1);
  });

  test('should add a crop to the cropArray property', () => {
    const tomato = new Tomato();
    eustace.addCrop(tomato);
    expect(eustace.cropArray).toEqual([tomato]);
  });
});