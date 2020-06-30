import { Crop } from './../src/crop.js';

describe('Crop', () => {
  jest.useFakeTimers();
  let crop;

  beforeEach(function() {
    crop = new Crop();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should create a crop object with a water level of 30', () => {
    expect(crop.waterLevel).toEqual(30);
  });

  test('should decrement crop water level by 1 every second', () =>{
    jest.advanceTimersByTime(1001);
    expect(crop.waterLevel).toEqual(29);
  });

  test('should reset crop water level back to 30', () =>{
    jest.advanceTimersByTime(15001);
    crop.waterCrop();
    expect(crop.waterLevel).toEqual(30);
  });
  
  test('should indicate the crop is alive if waterLevel > 0', () =>{
    jest.advanceTimersByTime(29999);
    expect(crop.status).toEqual("alive");
  });

  test('should indicate the crop is withered if waterLevel = 0', () =>{
    jest.advanceTimersByTime(30001);
    expect(crop.status).toEqual("withered");
  });

  test('should change crop harvest status to ready after one minute if status is alive', () => {
    jest.advanceTimersByTime(119000);
    crop.waterCrop();
    jest.advanceTimersByTime(2000);
    expect(crop.harvestStatus).toEqual("ready");
  });

  test('should change crop harvest status from ready to not ready', () => {
    crop.harvestStatus = "ready";
    crop.resetHarvestStatus();
    expect(crop.harvestStatus).toEqual("not ready");
  });
});