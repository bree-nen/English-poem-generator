let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "poem p oem po e m, p o e m",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
});
