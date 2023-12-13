const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const menu = document.querySelector(".navigation");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
