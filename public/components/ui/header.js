export class PageHeader extends HTMLParagraphElement {
	connectedCallback() {
		this.classList.add("header");
	}
}

customElements.define("ui-header", PageHeader, {
	extends: "p",
});
