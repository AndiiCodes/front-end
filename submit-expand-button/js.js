// index.js 
document.querySelector("button.expand").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    const button = e.currentTarget;
    button.classList.add("loading");
    button.disabled = true;
    setTimeout(() => {
      button.classList.add("loaded");
      setTimeout(() => {
        button.classList.add("finished");
        setTimeout(() => {
          button.classList.remove("finished");
          button.classList.remove("loaded");
          button.classList.remove("loading");
          button.disabled = false;
        }, 1500);
      }, 700);
    }, 1500);
  },
  false
);
