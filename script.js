"use strict";

// ? ELEMENT SELECTIONS:

const headerEl = document.querySelector(".header-section");
const skillSection = document.querySelector(".skills-section");
const heroSection = document.querySelector(".hero-section");
const btnSrollTo = document.querySelector(".hero-btn-2");
const nav = document.querySelector(".nav-bar");
const modal = document.querySelector(".modal-window");
const layer = document.querySelector(".overlay");
const contactButton = document.querySelector(".button");
const testimonialSlider = document.querySelector(".testimonial-slider");

// ? HTML CREATING:

// ? FUNCTIONS:

// * MODAL WINDOW -

const showModal = function () {
	modal.classList.remove("hidden");
	layer.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	layer.classList.add("hidden");
};

// * STICKY NAGIVATION -

const headerObserver = new IntersectionObserver(
	(entries) => {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			headerEl.classList.add("header-sticky");
			headerEl.classList.remove("container");
		} else {
			headerEl.classList.remove("header-sticky");
			headerEl.classList.add("container");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: `-${headerEl.getBoundingClientRect().height}px`,
	}
);

headerObserver.observe(heroSection);

// ? EVENT HANDLERS:

// * SMOOTH SCROLLING -

btnSrollTo.addEventListener("click", function () {
	skillSection.scrollIntoView({ behavior: "smooth" });
});

headerEl.addEventListener("click", function (e) {
	e.preventDefault();
	const id = e.target.getAttribute("href");
	if (!id) return;
	document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// * MODAL WINDOW -

document
	.querySelector(".btn--close-modal")
	.addEventListener("click", closeModal);
layer.addEventListener("click", closeModal);
contactButton.addEventListener("click", showModal);
