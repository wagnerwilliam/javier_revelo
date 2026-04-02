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
            { 
                id: 1, 
                name: "El Velo de la Memoria", 
                mainImg: this.buildUrl("el_velo_de_la_memoria.webp"),
                secondImg: null,
                thirdImg: null,
                category: "digital", 
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>EL VELO DE LA MEMORIA::</strong>
                </p>
                <p>
                    En esta obra, la mujer aparece con <strong>las manos sobre el rostro</strong>, no como un gesto de ocultación, sino como un acto <strong>sagrado de introspección</strong>. Sus manos se convierten en un <strong>umbral entre el mundo exterior y el universo interior</strong>, un símbolo que trasciende lo individual y habla del lenguaje universal del <strong>arte</strong>.
                </p>
                <p>
                    Cada pliegue de la piel, cada curva y cada línea es un <strong>testimonio de la experiencia humana</strong>, y cada gesto invita al espectador a mirar más allá de lo visible. La obra nos recuerda que el <strong>arte no solo representa la realidad</strong>, sino que también revela aquello que está oculto: emociones, memorias y pensamientos que habitan en lo profundo de nuestra conciencia.
                </p>
                <p>
                    La mujer con las manos en el rostro encarna la <strong>transformación, la contemplación y la conexión con lo intangible</strong>, recordándonos que el arte tiene el poder de <strong>despertar la sensibilidad, explorar la identidad y acercarnos a lo sagrado</strong> que reside bajo la superficie de la forma. Cada mirada sobre esta obra es un viaje hacia el silencio, la reflexión y la belleza que solo puede surgir cuando nos detenemos a <strong>observar con atención y abrirnos a lo invisible</strong>.
                </p>
                `
            },
            {
                id: 2, 
                name: "Tigre Café", 
                mainImg: this.buildUrl("tigrer_cafe.webp"),
                secondImg: this.buildUrl("tigre_cafe_2.webp"),
                category: "digital", 
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>TIGRE CAFÉ:</strong>
                </p>
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
            { id: 3, name: "Inclinación Interior", mainImg: this.buildUrl("inclinacion_interior_2.webp"), category: "escultura" },
            { id: 4, name: "Tránsito de lo Invisible", mainImg: this.buildUrl("transito_de_lo_invisible.webp"), category: "escultura" },
            { id: 5, name: "El umbral de la mente", mainImg: this.buildUrl("el_umbral_de_la_mente-scaled.webp"), category: "digital" },
            { id: 6, name: "Suspensión", mainImg: this.buildUrl("suspension.webp"), category: "fisico" },
            { id: 7, name: "Sin nombre", mainImg: this.buildUrl("sin_nombre.webp"), category: "digital" },
            { id: 8, name: "Entrega", mainImg: this.buildUrl("entrega.webp"), category: "escultura" },
            { id: 9, name: "Entre Piedra y Eternidad", mainImg: this.buildUrl("cielo.webp"), category: "fisico" },
            { id: 10, name: "Destino Interior", mainImg: this.buildUrl("billy_goat.webp"), category: "digital" },
            { id: 11, name: "Traffic", mainImg: this.buildUrl("traffic.webp"), category: "digital" },
            { id: 12, name: "Ecos del Bosque", mainImg: this.buildUrl("ecos_del_bosque.webp"), category: "fisico" },
            { id: 13, name: "El Último Testigo", mainImg: this.buildUrl("leon.webp"), category: "fisico" },
            { id: 14, name: "Post Humanum", mainImg: this.buildUrl("post_humanum.webp"), category: "digital" },
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
                mainImg: this.buildUrl("ecos_del_bosque.webp"),
                secondImg: null,
                thirdImg: null,
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€",
                year: 2024,
                dimensions: "120 x 90 cm",
                statement: `
                <p>
                    Descubre la armonía y la serenidad de la naturaleza en este <strong>óleo sobre lienzo</strong> de alta calidad. La obra muestra un bosque iluminado por la luz dorada, un río que fluye suavemente y venados que se mueven con calma, transmitiendo <strong>paz, espiritualidad y conexión con la vida</strong>.
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
            {
                id: 2,
                name: "El Último Testigo",
                description: "Óleo sobre lienzo",
                mainImg: this.buildUrl("leon.webp"),
                secondImg: this.buildUrl("leon_2.webp"),
                thirdImg: null,
                category: "fisico",
                price: 156,
                oldPrice: 165,
                currency: "€",
                year: 2024,
                dimensions: "120 x   90 cm",
                statement: `
                <p>
                    <strong>El Último Testigo</strong> es una obra que transmite fuerza, contemplación y espiritualidad a través de una escena profundamente simbólica. Javier Revelo presenta al león como una figura ancestral, silenciosa y dominante, contrapuesta a la fragilidad humana, creando una narrativa visual que invita al espectador a reflexionar sobre el respeto, la humildad y la conexión con la naturaleza.
                </p>

                <p>
                    La riqueza del óleo, las pinceladas expresivas y el manejo de la luz otorgan a la obra una presencia imponente y atemporal, convirtiéndola en una pieza central para coleccionistas que buscan arte con carácter, profundidad conceptual y alto valor estético.
                </p>
                `
            },
            {
                id: 3,
                name: "Entre Piedra y Eternidad",
                description: "Óleo sobre lienzo",
                mainImg: this.buildUrl("cielo.webp"),
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€",
                year: 2024,
            },
            {
                id: 4,
                name: "Entrega",
                description: "Escultura en arcilla",
                mainImg: this.buildUrl("entrega.webp"),
                category: "escultura",
                price: 200,
                oldPrice: 210,
                currency: "€",
                year: 2024,
            },
            {
                id: 5,
                name: "Post Humanum",
                description: "Ilustración digital",
                mainImg: this.buildUrl("post_humanum.webp"),
                category: "digital",
                price: 5,
                oldPrice: 10.50,
                currency: "€",
                year: 2024,
                dimensions: "736 x 1288 px"
            },
            {
                id: 6,
                name: "Sin nombre",
                description: "Ilustración digital",
                mainImg: this.buildUrl("sin_nombre.webp"),
                category: "digital",
                price: 6,
                oldPrice: 12,
                year: 2024,
                currency: "€"
            },
            {
                id: 7,
                name: "Suspensión",
                mainImg: this.buildUrl("suspension.webp"),
                category: "fisico",
                price: 150,
                oldPrice: 155,
                year: 2024,
                currency: "€"
            },
            {
                id: 8,
                name: "Traffic",
                mainImg: this.buildUrl("traffic.webp"),
                category: "digital",
                price: 8,
                oldPrice: 14,
                year: 2024,
                currency: "€"
            },
            {
                id: 9,
                name: "Tránsito de lo Invisible",
                mainImg: this.buildUrl("transito_de_lo_invisible.webp"),
                category: "escultura",
                price: 115,
                oldPrice: 130,
                year: 2024,
                currency: "€"
            },
        ];
    }
}
