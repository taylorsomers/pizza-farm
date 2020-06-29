import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Farmer } from '../src/farmer.js';
import { Tomato } from '../src/tomato.js';

function harvestCrop(farmer,crop) {
  farmer.addPoint();
  crop.resetHarvestStatus();
}

function gameOver(farmer) {
  setInterval(() => {
    for (let i = 0; i < farmer.cropArray.length; i++) {
      if (farmer.cropArray[i].status === "withered") {
        alert("GAME OVER");
        break;
      }
    }
  }, 1000);
}

$(document).ready(function() {
  const eustace = new Farmer("Eustace");
  const tomato = new Tomato();
  eustace.addCrop(tomato);
  gameOver(eustace);
  $("button#harvest").click(() => {
    harvestCrop(eustace,tomato);
    alert(tomato.waterLevel);
  });
  $("button#water").click(() => {
    tomato.waterTomato();
  });
});