import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Farmer } from '../src/farmer.js';
import { Tomato } from '../src/tomato.js';

function harvestCrop(farmer, crop) {
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

function waterMeter(crop) {
  setInterval(() => {
    if (crop.waterLevel > 20) {
      $("div.water-meter").html("<p id='good'>Good!</p>");
    } else if (crop.waterLevel > 10) {
      $("div.water-meter").html("<p id='thirsty'>Getting Thirsty!</p>");
    } else {
      $("div.water-meter").html("<p id='withering'>Withering!</p>");
    }
  });
}

$(document).ready(function() {
  const eustace = new Farmer("Eustace");
  const tomato = new Tomato();
  eustace.addCrop(tomato);
  waterMeter(tomato);
  gameOver(eustace);
  if (tomato.waterLevel > 20) {
    $("div.water-meter").html("<p>Good!</p>");
  }
  $("button#harvest").click(() => {
    if (tomato.harvestStatus === "ready") {
      harvestCrop(eustace, tomato);
    } else {
      alert("This crop is not ready to harvest yet!");
    }
  });
  $("button#water").click(() => {
    tomato.waterTomato();
  });
});