/* TODO: Very crude experiment. Revisit this file */
const numSteps = 20.0;

let boxElement;

window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#siteTitle");

    createObserver();
  },
  false,
);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.25, 1, 0],
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}


function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.intersectionRatio);
    if (entry.intersectionRatio === 0) {
      document.querySelectorAll(".opacity-on-scroll").forEach((item) => {
        item.style.opacity = 1;
      });
    } else if (entry.intersectionRatio === 1) {
      document.querySelectorAll(".opacity-on-scroll").forEach((item) => {
        item.style.opacity = 0;
      });
    }
  });
}
