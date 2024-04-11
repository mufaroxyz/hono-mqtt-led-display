export class Paragraph extends HTMLParagraphElement {
	connectedCallback() {
		this.classList.add("paragraph");
	}
}

customElements.define("ui-text", Paragraph, { extends: "p" });
