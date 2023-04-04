const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);
