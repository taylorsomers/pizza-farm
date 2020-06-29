export class Farmer {
  constructor(name){
    this.name = name;
    this.points = 0;
    this.cropArray = [];
  }

  addCrop(crop) {
    this.cropArray.push(crop);
  }

  addPoint() {
    this.points++;
  }
}