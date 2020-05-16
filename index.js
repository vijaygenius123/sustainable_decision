const scroller = new scrollama();
console.log(scroller);
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
  console.log(e.target.getAttribute("target"));
  const scrollIntoElemnent = document.getElementById(
    e.target.getAttribute("target")
  );

  scrollIntoElemnent.scrollIntoView({
    behavior: "smooth",
  });
}

const steps = document.getElementsByClassName("clickable");
for (var element = 0; element < steps.length; element++) {
  steps[element].addEventListener("click", handleClick);
}
console.log("Ready");
