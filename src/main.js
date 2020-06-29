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

const eustace = new Farmer("Eustace");
const tomato = new Tomato();

$(document).ready(function() {
  $("button#harvest").click(() => {
    harvestCrop(eustace,tomato);
    alert(tomato.harvestStatus);
  });
});