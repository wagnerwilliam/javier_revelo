import { TrabajosRepository } from "./repository.js"
import { StoreRepository } from "./repository.js"


/**
 * Clase para manejar configuración global
 * y acceso a datos según el tipo de vista (trabajos o tienda).
 */
export class Utils {

    constructor() {
        this.TIENDA = "tienda"
    }
    getBaseUrl() {
        const hostname = window.location.hostname;
        const isLocal = hostname === "localhost" || hostname === "127.0.0.1";

        return isLocal ? "/" : "/javier_revelo/";
    }

    getData(viewType) {
        return viewType === this.TIENDA 
        ? new StoreRepository(this.getBaseUrl()).getAll() 
        : new TrabajosRepository(this.getBaseUrl()).getAll();
    }
}
