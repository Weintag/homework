export const dropdownMenu = () => {
	const dropdownItem = document.querySelector(".menu__item.dropdown");
	const toggleLink = document.querySelector(".dropdown__toggle");

	if (dropdownItem && toggleLink) {
		toggleLink.addEventListener("click", event => {
			event.preventDefault();

			dropdownItem.classList.toggle("is-open");
		});

		document.addEventListener("click", event => {
			if (!dropdownItem.contains(event.target)) {
				dropdownItem.classList.remove("is-open");
			}
		});
	}
};
