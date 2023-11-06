/*const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
*/

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
	if (menu.classList.contains("hidden")) {
		// Open the mobile menu
		menu.classList.remove("hidden");
		btn.innerHTML = '<svg class="w-6 h-6 text-gray-100 hover:text-green-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>';
	} else {
		// Close the mobile menu
		menu.classList.add("hidden");
		btn.innerHTML = '<svg class="w-6 h-6 text-gray-100 hover:text-green-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>';
	}
});
