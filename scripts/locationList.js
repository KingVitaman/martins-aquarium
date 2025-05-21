import { database } from "./aquariumData.js";

export const locationList = () => {
  // Generate an HTML representation of each tip
  let locationHTML = "";

  for (const location of database.locations) {
    locationHTML += `
           <article class="location">
               <div class="location_details">
                   <h2 class="location_name">${location.name}</h2>
                   <p class="location_country">${location.country}</p>
                   <p class="location_description">${location.description}</p>
               </div>
           </article>
        `;
  }

  return locationHTML;
};
