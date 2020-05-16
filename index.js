const scroller = new scrollama();
console.log(scroller);
const scrollIntoElemnent = document.getElementById("3");
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {
    const { element, index, direction } = response;
    element.classList.add("is-active");
  })
  .onStepExit((response) => {
    const { element, index, direction } = response;
    element.classList.remove("is-active");
  });

function handleClick(e) {
  console.log("Hello", e);
  scrollIntoElemnent.scrollIntoView({
    behavior: "smooth",
  });
}

const steps = document.getElementsByClassName("step");
for (var element = 0; element < steps.length; element++) {
  steps[element].addEventListener("click", handleClick);
}
console.log("Ready");
