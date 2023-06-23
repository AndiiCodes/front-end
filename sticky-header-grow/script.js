const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
	header.classList.toggle("is-sticky", window.scrollY > headerTop);
});
