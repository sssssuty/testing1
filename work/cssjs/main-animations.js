// Generic test if element is in viewport
const thresh = 0;
function isElementInViewport(element) {
	var elementBoundingRect = element.getBoundingClientRect();
	return elementBoundingRect.top >= thresh &&
	elementBoundingRect.bottom <= (window.innerHeight + thresh || document.documentElement.clientHeight + thresh)
};

// Vertical pan reveal
const panAnimationElements = document.getElementsByClassName("pan-animation");
function panAnimation(elements) {
	for(i=0;i<elements.length;i++) {
		el = elements[i];
		if (isElementInViewport(el)) {
			el.classList.add("pan-visible");
		}
	}
}

// Circle image reveal
const slideImages = document.getElementsByClassName("slide-image-background");
function loadBoundingRects(elements) {
	for (var i = 0; i < elements.length; i++) {
		element = elements[i]
		elementBoundingRect = element.getBoundingClientRect();  
		element.style.setProperty('--boundingRectX', elementBoundingRect['x'] + 'px');
		element.style.setProperty('--boundingRectY', elementBoundingRect['y'] + window.scrollY + 'px');
	}
}
loadBoundingRects(slideImages);

// Event listeners
window.addEventListener("load",()=>{
	loadBoundingRects(slideImages);
	panAnimation(panAnimationElements);
})
window.addEventListener("scroll",()=>{
	panAnimation(panAnimationElements);
})
window.addEventListener('resize', function(event){
	loadBoundingRects(slideImages);
	panAnimation(panAnimationElements);
});