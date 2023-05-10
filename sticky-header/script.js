const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

document.body.style.setProperty("--_header-h", `${header.offsetHeight}px`);

window.addEventListener("scroll", function () {
	header.classList.toggle(
		"is-sticky",
		window.scrollY > headerTop + header.offsetHeight
	);
});
