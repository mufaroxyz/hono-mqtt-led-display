export class PageContent extends HTMLDivElement {
	connectedCallback() {
		this.classList.add("page");
	}
}

customElements.define("page-content", PageContent, {
	extends: "div",
});
