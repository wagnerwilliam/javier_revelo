class HeroSection extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title")
        this.innerHTML = `
            <section class="section hero">
                <h2>${title}</h2>
            </section>
        `
    }
}
customElements.define("my-hero", HeroSection)
