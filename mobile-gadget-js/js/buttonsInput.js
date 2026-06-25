export const buttonsSearch = () => {
	const searchInput = document.querySelector(".looking__input-block-search");
	const buttonsContainer = document.querySelector(
		".looking__input-container-buttons",
	);

	buttonsContainer.addEventListener("click", event => {
		if (
			event.target.classList.contains("looking__input-container-buttons-button")
		) {
			event.preventDefault();

			searchInput.value = event.target.textContent.trim();
		}
	});
};
