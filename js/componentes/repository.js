export class ImageRepository {

    /**
     * @param {string} baseUrl - URL base del proyecto (local o producción)
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    /**
     * Genera una URL completa de imagen
     * @param {string} path
     * @returns {string}
     */
    buildUrl(path) {
        return `${this.baseUrl}assets/images/galeria/${path}`
    }
}


/**
 * Repositorio de datos para las obras del portafolio artístico.
 * Extiende de ImageRepository para reutilizar la construcción de URLs.
 */
export class TrabajosRepository extends ImageRepository {

    /**
     * Obtiene todas las obras del portafolio
     * @returns {{
     *  name: string,
     *  url: string,
     *  category: string
     * }[]} Lista de trabajos
     */
    getAll() {
        return [
            { id: 1, name: "El Velo de la Memoria", url: this.buildUrl("el_velo_de_la_memoria.webp"), category: "digital" },
            {
                id: 2, 
                name: "Tigre Café", 
                url: this.buildUrl("tigrer_cafe.webp"), 
                category: "digital", 
                statement: `
                <p>
                    <strong>Tigre Café</strong> es un emprendimiento colombiano que nace del respeto por la tierra, el origen y la cultura cafetera. 
                    Cada grano representa la fuerza, el carácter y la elegancia del café colombiano, trabajado con dedicación desde el cultivo hasta la taza.
                </p>
                <p>
                    Este café es un <strong>blend cuidadosamente equilibrado de las variedades Castillo y Bourbon Rosado</strong>, una combinación que une estructura y suavidad con complejidad aromática. 
                    El resultado es una bebida armoniosa, con notas dulces y afrutadas, acidez delicada y un cuerpo redondo que invita a una experiencia sensorial profunda y auténtica.
                </p>
                <p>
                    Tigre Café está pensado para quienes buscan más que café: una conexión con el origen, el proceso y la pasión que hay detrás de cada cosecha. Un café que honra la tradición cafetera colombiana mientras explora nuevas expresiones de sabor.
                </p>
                `,
                about_design: `
                <p>
                    <strong>Tigre Café</strong> es un proyecto de identidad visual y diseño que desarrollé para un emprendimiento colombiano de café. Desde el inicio, concebí la figura del tigre no solo como un recurso ilustrativo, sino como el eje simbólico del lenguaje visual: una representación de fuerza, carácter y presencia.
                </p>
                <p>
                    El tigre articula toda la identidad del proyecto. Su forma, su mirada y su energía guiaron mis decisiones de composición, color y ritmo visual. A través de la ilustración y el diseño, busqué que esta figura conectara el producto con una sensación de intensidad, origen y naturaleza viva, estableciendo un diálogo entre lo salvaje y lo artesanal, y reforzando el carácter auténtico del café.
                </p>
                `
            },
            { id: 3, name: "Inclinación Interior", url: this.buildUrl("inclinacion_interior_2.webp"), category: "escultura" },
            { id: 4, name: "Tránsito de lo Invisible", url: this.buildUrl("transito_de_lo_invisible.webp"), category: "escultura" },
            { id: 5, name: "El umbral de la mente", url: this.buildUrl("el_umbral_de_la_mente-scaled.webp"), category: "digital" },
            { id: 6, name: "Suspensión", url: this.buildUrl("suspension.webp"), category: "fisico" },
            { id: 7, name: "Sin nombre", url: this.buildUrl("sin_nombre.webp"), category: "digital" },
            { id: 8, name: "Entrega", url: this.buildUrl("entrega.webp"), category: "escultura" },
            { id: 9, name: "Entre Piedra y Eternidad", url: this.buildUrl("cielo.webp"), category: "fisico" },
            { id: 10, name: "Destino Interior", url: this.buildUrl("billy_goat.webp"), category: "digital" },
            { id: 11, name: "Traffic", url: this.buildUrl("traffic.webp"), category: "digital" },
            { id: 12, name: "Ecos del Bosque", url: this.buildUrl("ecos_del_bosque.webp"), category: "fisico" },
            { id: 13, name: "El Último Testigo", url: this.buildUrl("leon.webp"), category: "fisico" },
            { id: 14, name: "Post Humanum", url: this.buildUrl("post_humanum.webp"), category: "digital" },
        ];
    }
}

/**
 * Repositorio de datos para la tienda (productos a la venta).
 * Extiende de ImageRepository para reutilizar la construcción de URLs.
 */
export class StoreRepository extends ImageRepository {

    /**
     * Obtiene todos los productos disponibles en la tienda
     * @returns {{
     *  name: string,
     *  description?: string,
     *  url: string,
     *  category: string,
     *  price: number,
     *  oldPrice: number,
     *  currency: string
     * }[]} Lista de productos
     */
    getAll() {
        return [
            {
                id: 1,
                name: "Ecos del Bosque",
                description: "Óleo sobre lienzo",
                url: this.buildUrl("ecos_del_bosque.webp"),
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€"
            },
            {
                id: 2,
                name: "El Último Testigo",
                description: "Óleo sobre lienzo",
                url: this.buildUrl("leon.webp"),
                category: "fisico",
                price: 156,
                oldPrice: 165,
                currency: "€"
            },
            {
                id: 3,
                name: "Entre Piedra y Eternidad",
                description: "Óleo sobre lienzo",
                url: this.buildUrl("cielo.webp"),
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€"
            },
            {
                id: 4,
                name: "Entrega",
                description: "Escultura en arcilla",
                url: this.buildUrl("entrega.webp"),
                category: "escultura",
                price: 200,
                oldPrice: 210,
                currency: "€"
            },
            {
                id: 5,
                name: "Post Humanum",
                description: "Ilustración digital",
                url: this.buildUrl("post_humanum.webp"),
                category: "digital",
                price: 5,
                oldPrice: 10.50,
                currency: "€"
            },
            {
                id: 6,
                name: "Sin nombre",
                description: "Ilustración digital",
                url: this.buildUrl("sin_nombre.webp"),
                category: "digital",
                price: 6,
                oldPrice: 12,
                currency: "€"
            },
            {
                id: 7,
                name: "Suspensión",
                url: this.buildUrl("suspension.webp"),
                category: "fisico",
                price: 150,
                oldPrice: 155,
                currency: "€"
            },
            {
                id: 8,
                name: "Traffic",
                url: this.buildUrl("traffic.webp"),
                category: "digital",
                price: 8,
                oldPrice: 14,
                currency: "€"
            },
            {
                id: 9,
                name: "Tránsito de lo Invisible",
                url: this.buildUrl("transito_de_lo_invisible.webp"),
                category: "escultura",
                price: 115,
                oldPrice: 130,
                currency: "€"
            },
        ];
    }
}
