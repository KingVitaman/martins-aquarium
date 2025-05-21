import { database } from "./aquariumData.js";

export const fishList = () => {
  // Generate an HTML representation of each fish
  let fishHTML = "";

  for (const fish of database.fish) {
    fishHTML += `
           <article class="fish">
               <div class="fish_details"></div>
                <h2 class="fish_name">${fish.name}</h2>
               <img class="fish_image" src="${fish.image}" alt="${fish.name} the ${fish.species}">
                   <p class="fish_species">${fish.species}</p>
                   <p class="fish_diet">${fish.diet}</p>
                   <p class="fish_length">${fish.length}</p>
                   <p class="fish_location">${fish.location}</p>
                   
               </div>
           </article>
        `;
  }

  return fishHTML;
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = "";
    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += `
                <article class="fish">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <img class="fish_image" src="${fish.image}" alt="${fish.name} the ${fish.species}">
                        <p class="fish_species">${fish.species}</p>
                        <p class="fish_diet">${fish.diet}</p>
                        <p class="fish_length">${fish.length} inches</p>
                        <p class="fish_location">${fish.location}</p>
                    </div>
                </article>
            `;
        }
    }
    return holyFish;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = "";
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 === 0) {
            soldierFishHTML += `
                <article class="fish">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <img class="fish_image" src="${fish.image}" alt="${fish.name} the ${fish.species}">
                        <p class="fish_species">${fish.species}</p>
                        <p class="fish_diet">${fish.diet}</p>
                        <p class="fish_length">${fish.length} inches</p>
                        <p class="fish_location">${fish.location}</p>
                    </div>
                </article>
            `;
        }
    }
    return soldierFishHTML;
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFishHTML = "";
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFishHTML += `
                <article class="fish">
                    <div class="fish_details">
                        <h2 class="fish_name">${fish.name}</h2>
                        <img class="fish_image" src="${fish.image}" alt="${fish.name} the ${fish.species}">
                        <p class="fish_species">${fish.species}</p>
                        <p class="fish_diet">${fish.diet}</p>
                        <p class="fish_length">${fish.length} inches</p>
                        <p class="fish_location">${fish.location}</p>
                    </div>
                </article>
            `;
        }
    }
    return regularFishHTML;
}
