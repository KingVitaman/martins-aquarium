import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";

// Generate the fish list
const fishHTML = fishList();

// Generate the care tips
const tipHTML = tipList();

// Generate the location list
const locationHTML = locationList();

// Render each HTML string to the correct DOM element
const newDisplay = document.querySelector("#fishList");
newDisplay.innerHTML = fishHTML;

const tipDisplay = document.querySelector("#tipList");
tipDisplay.innerHTML = tipHTML;

const locationDisplay = document.querySelector("#locationList");
locationDisplay.innerHTML = locationHTML;