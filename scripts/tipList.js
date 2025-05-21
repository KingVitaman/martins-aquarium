import { database } from "./aquariumData.js";

export const tipList = () => {
  // Generate an HTML representation of each tip as a bulleted list of articles
  let tipHTML = "<h2>Tips</h2><ul>";

  for (const tip of database.tips) {
    tipHTML += `
      <li>
        <article class="tip">
          <div class="tip_details">
            <h2 class="tip_topic">${tip.topic}</h2>
            <p class="tip_text">${tip.text}</p>
          </div>
        </article>
      </li>
    `;
  }

  tipHTML += "</ul>";
  return tipHTML;
};
