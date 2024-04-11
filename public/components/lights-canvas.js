import "./canvas-settings.js";
import { CanvasSettings } from "./canvas-settings.js";

/**
 * @property {number} rows
 * @property {number} columns
 */
class CanvasGrid extends HTMLDivElement {
	constructor() {
		super();

		this.state = {
			rgb: { r: 0, g: 0, b: 0 },
		};
	}

	connectedCallback() {
		const rows = this.getAttribute("rows");
		const columns = this.getAttribute("columns");

		const canvas = document.createElement("div");
		canvas.classList.add("canvas");

		this.appendChild(canvas);

		for (let i = 0; i < rows; i++) {
			const row = document.createElement("div");
			row.classList.add("column");
			for (let j = 0; j < columns; j++) {
				const cell = document.createElement("div");

				cell.classList.add("cell");
				cell.addEventListener("click", () => {
					cell.classList.toggle("active");

					const isActive = cell.classList.contains("active");

					this.updateCanvas(
						i,
						j,
						isActive ? { r: 255, g: 255, b: 255 } : { r: 0, g: 0, b: 0 },
					);
				});

				row.appendChild(cell);
			}
			canvas.appendChild(row);
		}

		this.appendChild(new CanvasSettings());
	}

	/**
	 *
	 * @param {string} container
	 * @param {number} columns
	 * @param {number} rows
	 */
	updateCanvas(x, y, color) {
		fetch("/canvas/api/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ x, y, color }),
		});
	}
}

customElements.define("canvas-grid", CanvasGrid, { extends: "div" });
