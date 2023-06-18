// Loading Screen
window.addEventListener("load", function(){
	let hoverImagesContainer = document.getElementById('imageHover');
	let loadingScreen = document.getElementById('loadingScreen');
	loadingScreen.style.opacity = '0';
	loadingScreen.style.zIndex = '-1';
	hoverImagesContainer.style.opacity = '1';
});
