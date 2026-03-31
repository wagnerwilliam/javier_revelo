

class HeroSection extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute("title")
        this.innerHTML = `
            <section class="section hero">
                <h1>${title}</h1>
            </section>
        `
    }
}
customElements.define("my-hero", HeroSection)
