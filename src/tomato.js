export class Tomato {
  constructor(){
    this.waterLevel = 30;
    this.harvestStatus = "not ready";
  }

  setWaterLevel() {
    setInterval(() => {
      this.waterLevel--;
    }, 1000);
  }

  waterTomato() {
    this.waterLevel = 30;
  }

  setTomatoStatus() {
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
    },120000);
  } 
  
  resetHarvestStatus() {
    this.harvestStatus = "not ready";
  }
}