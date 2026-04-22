/**
 * Componente personalizado Footer
 * @extends {HTMLElement}
 */
class Footer extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <section class="section__footer">
            <footer>
                <div class="footer__block">
                    <div class="footer_content">
                        <p>Todas las imágenes © Javier Revelo. Prohibido su uso sin permiso.</p>
                    </div>
        
                    <ul class="footer__icons">
                        <li><a><i class="ri-facebook-circle-fill"></i></a></li>
                        <li><a><i class="ri-mail-fill"></i></a></li>
                        <li><a><i class="ri-instagram-line"></i></a></li>
                    </ul>
                </div>
            </footer>
        </section>
        `
    }
}

customElements.define("my-footer", Footer)
