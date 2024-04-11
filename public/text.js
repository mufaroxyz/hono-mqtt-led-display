import "./components/navigation.js";

const input = document.getElementById("input");

/**
 * @param {string} text
 */
function updateCanvasText(text) {
	fetch("/canvas/api/text", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ text }),
	});
}

input.addEventListener("input", () => {
	updateCanvasText(input.value);
});
