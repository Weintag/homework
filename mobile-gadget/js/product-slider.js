export const productSlider = () => {
	new Swiper(".product__slider", {
		slidesPerVies: "auto",
		centeredSlides: true,
		loop: true,
		mousewheel: {
			forceToAxis: true,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			prevEl: ".product__slider-button--prev",
			nextEl: ".product__slider-button--next",
		},
	});
};
