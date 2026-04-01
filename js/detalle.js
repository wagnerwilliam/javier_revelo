import { Utils } from "./componentes/utils.js"


class Detalle extends HTMLElement {

    constructor(){
        super()
        this.utils = new Utils()
    }

    connectedCallback() {
        const params = new URLSearchParams(window.location.search);
        const data = this.utils.getData(params.get("type"));
        const item = data.find(obj => obj.id == params.get("id"));        
        document.getElementById("myHero").title = item.name
        document.title = item.name

    }

    render(){

    }
}

customElements.define("my-details", Detalle)
