const routes = {
	"/pixel": "Pixel",
	"/text": "Text",
};

export class NavigationComponent extends HTMLDivElement {
	connectedCallback() {
		const currentPathName = window.location.pathname.replace(/\.html$/, "");

		this.classList.add("navigation");

		for (const [path, title] of Object.entries(routes)) {
			const link = document.createElement("a");
			link.href = `${path}.html`;
			link.textContent = title;
			link.classList.add("navigation-link");
			if (path === currentPathName) {
				link.classList.add("navigation-active");
			}
			this.appendChild(link);
		}
	}
}

customElements.define("navigation-bar", NavigationComponent, {
	extends: "div",
});
