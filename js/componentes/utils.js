import { TrabajosRepository } from "./repository.js"
import { StoreRepository } from "./repository.js"

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
