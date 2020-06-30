export class Crop {
  constructor(decrement, milliseconds){
    this.waterLevel = 30;
    this.harvestStatus = "not ready";
    this.setWaterLevel(decrement);
    this.setCropStatus();
    this.setHarvestStatus(milliseconds);
  }

  setWaterLevel(decrement) {
    setInterval(() => {
      this.waterLevel -= decrement;
    }, 1000);
  }

  waterCrop() {
    this.waterLevel = 30;
  }

  setCropStatus() {
    setInterval(() => {
      if (this.waterLevel > 0) {
        this.status = "alive";
      } else {
        this.status = "withered";
      }
    }, 1000);
  }

  setHarvestStatus(milliseconds) {
    setInterval(() => {
      if(this.status === "alive") {
        this.harvestStatus = "ready";
      }
    }, milliseconds);
  }
  
  resetHarvestStatus() {
    this.harvestStatus = "not ready";
    this.setHarvestStatus();
  }
}