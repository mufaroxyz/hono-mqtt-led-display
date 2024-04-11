export class CanvasSettings extends HTMLDivElement {
	connectedCallback() {
		this.classList.add("canvas-settings");

		const rows = document.createElement("input");
		rows.type = "number";
		rows.min = 1;
		rows.max = 100;
		rows.value = 10;
		rows.classList.add("canvas-settings-input");
		rows.addEventListener("change", () => {
			this.updateCanvasSettings();
		});

		const columns = document.createElement("input");
		columns.type = "number";
		columns.min = 1;
		columns.max = 100;
		columns.value = 10;
		columns.classList.add("canvas-settings-input");
		columns.addEventListener("change", () => {
			this.updateCanvasSettings();
		});

		this.appendChild(rows);
		this.appendChild(columns);
	}
}

customElements.define("canvas-settings", CanvasSettings, { extends: "div" });
