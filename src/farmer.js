export class Farmer {
  constructor(name){
    this.name = name;
    this.points = 0;
  }

  addPoint() {
    this.points++;
  }
}