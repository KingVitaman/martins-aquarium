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
                   <p class="fish_length">${fish.length} inches</p>
                   <p class="fish_location">${fish.location}</p>
                   
               </div>
           </article>
        `;
  }

  return fishHTML;
};
