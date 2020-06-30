export class Crop {
  constructor(){
    this.waterLevel = 30;
    this.harvestStatus = "not ready";
    this.setWaterLevel();
    this.setCropStatus();
    this.setHarvestStatus();
  }

  setWaterLevel() {
    setInterval(() => {
      this.waterLevel--;
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

  setHarvestStatus() {
    setInterval(() => {
      if(this.status === "alive") {
        this.harvestStatus = "ready";
      }
    }, 60000);
  }
  
  resetHarvestStatus() {
    this.harvestStatus = "not ready";
    this.setHarvestStatus();
  }
}