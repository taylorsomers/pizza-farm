import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Farmer } from '../src/farmer.js';
import { Crop } from '../src/crop.js';

function harvestCrop(farmer, crop) {
  farmer.addPoint();
  crop.resetHarvestStatus();
}

function gameOver(farmer) {
  const myTimer = setInterval(() => {
    for (let i = 0; i < farmer.cropArray.length; i++) {
      if (farmer.cropArray[i].status === "withered") {
        clearInterval(myTimer);
        alert("Game Over!");
        location.reload();
      }
    }
    if (farmer.points === 2) {
      clearInterval(myTimer);
      alert("You Win!");
      location.reload();
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
  }, 0);
}

function harvestMeter(crop) {
  setInterval(() => {
    if(crop.harvestStatus === "not ready") {
      $("div.harvest-meter").html("<p id='not-ready'>Not Ready!</p>");
    } else {
      $("div.harvest-meter").html("<p id='ready'>Ready!</p>");
    }
  }, 0);
}

$(document).ready(function() {
  const eustace = new Farmer("Eustace");
  const tomato = new Crop();
  eustace.addCrop(tomato);
  waterMeter(tomato);
  harvestMeter(tomato);
  gameOver(eustace);
  $("button#harvest").click(() => {
    if (tomato.harvestStatus === "ready") {
      harvestCrop(eustace, tomato);
    } else {
      alert("This crop is not ready to harvest yet!");
    }
  });
  $("button#water").click(() => {
    tomato.waterCrop();
  });
});