function displayPoem(response) {
  
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
 
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "38b3of7fc064a9ct455e1cb4004bf475";

  let context =
    "Since you are the best romantic expert I know and have come across many poems, this poem should express intense romantic feelings in a short, powerful form (under 8 lines). It focuses on the user’s emotions, highlighting intimacy, trust, and the sense of completeness that comes from their input. The poem should be based on the ideas, feelings, or details provided by the user, making it personal and meaningful. Make sure to follow the user’s instructions carefully, keeping the tone heartfelt and sincere—just enough to make the reader feel the depth of the connection.Add an emoji based on the user's emotion at the end.";
  let prompt =`User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  let poemElement= document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an English Poem about ${instructionsInput.value}</div>`;

  //console.log("generating poem");
  //console.log(`prompt: ${prompt}`);
  //console.log(`context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
