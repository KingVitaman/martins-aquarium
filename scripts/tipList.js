import { database } from "./aquariumData.js";

export const tipList = () => {
  // Generate an HTML representation of each tip
  let tipHTML = "";

  for (const tip of database.tips) {
    tipHTML += `
           <article class="tip">
               <div class="tip_details">
                   <h2 class="tip_topic">${tip.topic}</h2>
                   <p class="tip_text">${tip.text}</p>
               </div>
           </article>
        `;
  }

  return tipHTML;
};
