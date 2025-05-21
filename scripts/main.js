import { mostHolyFish, soldierFish, regularFish } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";

// Generate the fish HTML in the correct order
const fishHTML = mostHolyFish() + soldierFish() + regularFish();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
document.querySelector("#fishList").innerHTML = fishHTML;
document.querySelector("#tipList").innerHTML = tipHTML;
document.querySelector("#locationList").innerHTML = locationHTML;

