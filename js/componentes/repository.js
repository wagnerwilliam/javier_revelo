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
                    <strong>EL VELO DE LA MEMORIA:</strong><br><br>
                    En esta obra, la mujer aparece con <strong>las manos sobre el rostro</strong>, no como un gesto de ocultación, sino como un acto <strong>sagrado de introspección</strong>. Sus manos se convierten en un <strong>umbral entre el mundo exterior y el universo interior</strong>, un símbolo que trasciende lo individual y habla del lenguaje universal del <strong>arte</strong>.<br><br>
                    Cada pliegue de la piel, cada curva y cada línea es un <strong>testimonio de la experiencia humana</strong>, y cada gesto invita al espectador a mirar más allá de lo visible. La obra nos recuerda que el <strong>arte no solo representa la realidad</strong>, sino que también revela aquello que está oculto: emociones, memorias y pensamientos que habitan en lo profundo de nuestra conciencia.<br><br>
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
                    <strong>TIGRE CAFÉ:</strong><br><br>
                    <strong>Tigre Café</strong> es un emprendimiento colombiano que nace del respeto por la tierra, el origen y la cultura cafetera. 
                    Cada grano representa la fuerza, el carácter y la elegancia del café colombiano, trabajado con dedicación desde el cultivo hasta la taza.<br><br>
                    Este café es un <strong>blend cuidadosamente equilibrado de las variedades Castillo y Bourbon Rosado</strong>, una combinación que une estructura y suavidad con complejidad aromática. 
                    El resultado es una bebida armoniosa, con notas dulces y afrutadas, acidez delicada y un cuerpo redondo que invita a una experiencia sensorial profunda y auténtica.<br><br>
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
            { 
                id: 3, 
                name: "Inclinación Interior", 
                mainImg: this.buildUrl("inclinacion_interior_2.webp"),
                secondImg: this.buildUrl("inclinacion_interior.webp"),
                description: "Escultura en arcilla",
                category: "escultura",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>INCLINACIÓN INTERIOR:</strong><br><br>
                    Esta escultura en <strong>arcilla</strong> presenta una figura femenina en una postura de profunda flexión, cercana al gesto del yoga y al acto de recogimiento corporal. El cuerpo se inclina hacia sí mismo, formando un arco que sugiere introspección, entrega y escucha interior. No hay un rostro definido que se muestre al exterior: la identidad se repliega para dar lugar a la experiencia interna.<br><br>
                    La materia conserva las huellas del proceso manual, haciendo visible la <strong>relación directa entre el cuerpo del artista y el cuerpo representado</strong>. Las superficies irregulares y las marcas del modelado refuerzan la sensación de peso, gravedad y presencia, anclando la figura a la tierra mientras el gesto apunta hacia lo espiritual.<br><br>
                    En esta obra exploro el cuerpo como un espacio de meditación y tránsito, donde la forma no busca la perfección anatómica, sino la verdad expresiva. La escultura propone un momento de pausa y contemplación, invitando a observar el silencio que habita en el gesto y la quietud que surge cuando el cuerpo se convierte en oración.
                </p>
                `
            },
            { 
                id: 4, 
                name: "Tránsito de lo Invisible", 
                mainImg: this.buildUrl("transito_de_lo_invisible.webp"),
                secondImg: this.buildUrl("transito_de_lo_invisible_3.webp"),
                thirdImg: this.buildUrl("transito_de_lo_invisible_2.webp"),
                category: "escultura",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>TRÁNSITO DE LO INVISIBLE:</strong><br><br>
                    Esta escultura nace de la tensión entre la forma y la ausencia. El rostro humano emerge apenas reconocible, atrapado en un entramado de líneas que parecen desplazarse, deshacerse y recomponerse al mismo tiempo. No es un retrato, sino una <strong>presencia en tránsito</strong>, una identidad que no se fija, que se transforma continuamente.<br><br>
                    Las capas que envuelven la figura recuerdan a corrientes de aire, raíces o fragmentos de memoria en movimiento. Cada tira de materia parece registrar un instante distinto: pensamientos superpuestos, palabras no dichas, emociones que se desplazan bajo la superficie del cuerpo. La materia no cubre el rostro para ocultarlo, sino para <strong>hablar de todo aquello que no puede representarse directamente</strong>.<br><br>
                    En esta obra exploro el cuerpo como territorio de conflicto y revelación. La figura se sostiene en un equilibrio frágil, como si estuviera siendo erosionada por el tiempo o atravesada por una fuerza invisible. No hay quietud: la escultura sugiere un proceso continuo, una lucha silenciosa entre lo que permanece y lo que se disuelve.
                </p>
                `
            },
            { 
                id: 5, 
                name: "El umbral de la mente", 
                mainImg: this.buildUrl("el_umbral_de_la_mente-scaled.webp"),
                secondImg: this.buildUrl("el_umbral_de_la_mente_2.webp"),
                category: "digital",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>EL UMBRAL DE LA MENTE:</strong><br><br>
                    Esta obra construye un espacio imposible donde la arquitectura se transforma en un laberinto de escaleras, pasillos y planos suspendidos. La estructura parece desafiar la lógica y la gravedad, creando un territorio inestable en el que cada nivel se pliega sobre sí mismo. Las formas se repiten y se fragmentan, generando una sensación de infinito, como si el espacio estuviera atrapado en un ciclo perpetuo de ascenso y caída.<br><br>
                    Las aves negras que atraviesan la escena introducen una presencia viva dentro de este entorno artificial. Su vuelo sugiere libertad, tránsito y conciencia, contrastando con la rigidez de la arquitectura. En medio del caos geométrico, estas figuras funcionan como símbolos del pensamiento, del alma o de la memoria que intenta escapar de una estructura que la contiene.<br><br>
                    La obra dialoga con temas como la mente, el tiempo y la percepción. Las escaleras, que normalmente conducen de un punto a otro, aquí pierden su función y se convierten en recorridos sin destino, evocando estados de introspección, confusión y búsqueda interior. El uso del blanco y negro refuerza el carácter onírico y atemporal de la escena, situando al espectador en un espacio entre lo real y lo imaginado.<br><br>
                </p>
                `
            },
            { 
                id: 6, 
                name: "Suspensión", 
                mainImg: this.buildUrl("suspension.webp"),
                secondImg: this.buildUrl("suspension_2.webp"),
                category: "fisico",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>SUSPENSIÓN:</strong><br><br>
                    <strong>Suspensión</strong> es una pintura al óleo concebida como un acto de pausa y contemplación. La obra surge de la necesidad de representar un instante detenido, un momento en el que el cuerpo deja de resistirse y se entrega a un estado de quietud absoluta. La figura femenina no se hunde ni asciende: permanece suspendida, habitando un espacio intermedio donde el tiempo parece diluirse.<br><br>
                    Mi proceso de creación se desarrolla de manera lenta e intuitiva, respetando mis propios tiempos al trabajar con pintura al óleo. Trabajo por capas, permitiendo que cada veladura dialogue con la anterior. Esta superposición gradual de pintura me ayuda a generar profundidad, atmósfera y una sensación de inmersión que refuerza mi idea de tránsito y transformación. No trato el agua únicamente como un entorno, sino como un elemento simbólico que envuelve, protege y transforma la figura.<br><br>
                    La luz desempeña un papel esencial en la obra. Filtrada desde la superficie, atraviesa el agua y se fragmenta sobre el cuerpo, creando contrastes sutiles entre claridad y sombra. Este juego lumínico refuerza el carácter introspectivo de la escena y guía la mirada del espectador hacia un estado de contemplación silenciosa.
                </p>
                `
            },
            { 
                id: 7, 
                name: "Sin nombre", 
                mainImg: this.buildUrl("sin_nombre.webp"),
                secondImg: this.buildUrl("sin_nombre_2.webp"),
                category: "digital",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>SIN NOMBRE:</strong><br><br>
                    La obra presenta una presencia que no necesita nombre. Su forma, densa y antigua, ha adoptado materia para permanecer cercana al mundo humano. En su mirada habita una atención constante: una vigilancia que no oprime ni invade, pero que nunca se retira. No observa desde una distancia superior, sino desde el interior mismo del tiempo cotidiano.<br><br>
                    La figura que asciende hacia el umbral avanza guiada por una certeza interior. En un mundo atravesado por el ruido, la confusión y la pérdida de orientación, esta presencia cumple una función clara: ofrecer dirección sin imponerla. No evita la caída ni neutraliza el mal, pero establece un punto de referencia cuando el orden se disuelve.<br><br>
                    La obra afirma que lo sagrado no necesita revelarse de forma evidente para ser real. Permanece próximo en formas que no buscan ser comprendidas del todo, sino atendidas. Su presencia no exige fe absoluta, sino una disposición interior a reconocerla.
                </p>
                `
            },
            { 
                id: 8, 
                name: "Entrega", 
                mainImg: this.buildUrl("entrega.webp"),
                secondImg: this.buildUrl("entrega_2.webp"),
                category: "escultura",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>ENTREGA:</strong><br><br>
                    La escultura encarna un instante suspendido entre la entrega y la elevación. El cuerpo, tensado hacia lo alto, no representa un gesto de huida ni de triunfo, sino un acto de confianza absoluta. La figura no asciende por fuerza propia: se ofrece. Sus brazos abiertos no buscan sostenerse, sino alinearse con algo que excede lo visible.<br><br>
                    Desde la base emergen múltiples manos que acompañan el movimiento. No empujan ni retienen; sostienen. Son presencias silenciosas que participan del mismo impulso, recordando que ningún acto de elevación es completamente individual. La obra habla de una fuerza compartida, de una guía que se manifiesta a través de otros, incluso cuando no es reconocida como tal.
                </p>
                `
            },
            { 
                id: 9, 
                name: "Entre Piedra y Eternidad", 
                mainImg: this.buildUrl("cielo.webp"),
                secondImg: this.buildUrl("cielo_2.webp"),
                thirdImg: this.buildUrl("cielo_3.webp"),
                category: "fisico",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>ENTRE PIEDRA Y ETERNIDAD:</strong><br><br>
                    En un instante suspendido más allá del tiempo, un hombre se sienta junto a una roca, no solo observando el cielo, sino sintiendo la danza de fuerzas invisibles que atraviesan el universo y el alma. Sobre él, un remolino gira en el cielo, <strong>como un ojo que contempla y guía</strong>, manifestando la energía vital que fluye entre lo visible y lo intangible. No es amenaza, sino un recordatorio de que incluso en el caos hay orden, ritmo y propósito.<br><br>
                    El hombre permanece quieto, su presencia es un acto de atención profunda y contemplación, un punto de calma que refleja cómo el ser humano puede <strong>conectar con lo trascendente sin dominarlo</strong>. La obra invita al espectador a dejar de buscar certezas y abrirse a la experiencia de lo sagrado en la cotidianidad, encontrando dirección y armonía en la quietud y la percepción interna.
                </p>
                `
            },
            { 
                id: 10, 
                name: "Destino Interior", 
                mainImg: this.buildUrl("billy_goat.webp"), 
                category: "digital",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>DESTINO INTERIOR:</strong><br><br>
                    La obra explora el vínculo profundo entre las acciones humanas y el destino que estas configuran más allá de la vida visible. No habla de castigos impuestos, sino de consecuencias inevitables que nacen de la repetición consciente de actos carentes de ética, compasión y responsabilidad. Cada figura y cada gesto representan un estado del alma enfrentado a aquello que eligió sostener durante su paso por el mundo.<br><br>
                    Lejos de una lectura literal, la escena funciona como un espejo simbólico: recuerda que toda existencia deja una huella y que vivir sin conciencia conduce a un desenlace donde ya no hay posibilidad de corregir. La obra propone una reflexión silenciosa sobre la libertad de elegir en vida, y sobre cómo esa libertad conlleva un compromiso profundo con lo que hacemos, decimos y permitimos.
                </p>
                `
            },
            { 
                id: 11, 
                name: "Traffic", 
                mainImg: this.buildUrl("traffic.webp"), 
                category: "digital",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>TRAFFIC:</strong><br><br>
                    Un viajero avanza lentamente por un territorio vasto y suspendido en el tiempo. No huye ni persigue nada; simplemente <strong>escucha</strong>. El camino se abre ante él como una revelación tranquila, guiándolo hacia una arquitectura que no pertenece del todo al mundo físico, sino a un estado de conciencia más profundo.<br><br>
                    La ciudad en la distancia no es un destino material, sino un símbolo: representa aquello que solo se alcanza cuando el ruido interno se disuelve. Cada paso sobre la arena es una renuncia al pasado inmediato y una entrega al presente. El paisaje, austero y luminoso, actúa como un espejo del estado interior del viajero: cuanto más simple es el entorno, más clara se vuelve la visión.
                </p>
                `
            },
            { 
                id: 12, 
                name: "Ecos del Bosque", 
                mainImg: this.buildUrl("ecos_del_bosque.webp"),
                secondImg: this.buildUrl("ecos_del_bosque_2.webp"),
                category: "fisico",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>ECOS DEL BOSQUE:</strong><br><br>
                    En la quietud del bosque, donde la luz se filtra suavemente entre las hojas, un río murmura su canción eterna. Sus aguas no solo fluyen, sino que llevan consigo secretos antiguos, recuerdos del mundo y del alma. Entre los árboles, unos venados emergen con pasos silenciosos, como si fueran guías que enseñan a quien los observa a moverse con gracia, atención y respeto.<br><br>
                    <strong>Inspiración</strong>: La obra nació de la contemplación de la naturaleza y la meditación sobre el flujo de la vida. Se buscó capturar la serenidad y el misticismo que transmiten los bosques y los animales en libertad.<br><br>
                    <strong>Boceto inicial</strong>: Se realizaron dibujos previos para ubicar los elementos principales (árboles, río, venados) y establecer la composición y perspectiva.<br><br>
                    <strong>Pintura al óleo</strong>: Se trabajó en capas, empezando por los fondos suaves, luego los detalles de los árboles, agua y finalmente los venados, cuidando luces y sombras para lograr profundidad y atmósfera.
                </p>
                `
            },
            { 
                id: 13, 
                name: "El Último Testigo", 
                mainImg: this.buildUrl("leon.webp"),
                secondImg: this.buildUrl("leon_2.webp"),
                category: "fisico",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>EL ÚLTIMO TESTIGO:</strong><br><br>
                    En medio de un bosque antiguo, donde la luz apenas logra filtrarse entre los troncos centenarios, un león emerge como presencia absoluta. No ruge ni ataca: <strong>observa</strong>. Su cuerpo, firme y monumental, parece fundirse con el entorno, como si fuera el guardián silencioso de un mundo primigenio.<br><br>
                    A sus pies, una figura humana pequeña —casi insignificante en escala— se arrodilla en actitud de entrega, contemplación o súplica. No hay violencia en el gesto, sino un reconocimiento profundo: el encuentro entre la fragilidad humana y la fuerza indómita de la naturaleza.<br><br>
                    La escena no representa una fábula literal, sino un <strong>diálogo simbólico</strong>. El león encarna el instinto, el poder ancestral, la memoria salvaje que precede al ser humano. La figura humana, por su parte, representa la conciencia, el asombro y la necesidad de reconciliación con aquello que ha intentado dominar.
                </p>
                `
            },
            { 
                id: 14, 
                name: "Post Humanum", 
                mainImg: this.buildUrl("post_humanum.webp"),
                category: "digital",
                statement: `
                <p>
                    <strong>DECLARACIÓN DEL PROYECTO</strong>
                    <strong>POST HUMANUM:</strong><br><br>
                    En un paisaje devastado, donde el horizonte está marcado por columnas de humo y ciudades reducidas a ruinas, una figura solitaria permanece sentada en silencio. Porta una máscara antigás, símbolo de un mundo que ya no puede respirarse a sí mismo. No hay prisa, no hay huida: solo contemplación.<br><br>
                    Entre campos teñidos de un naranja intenso —color que rompe la monocromía gris de la destrucción— el personaje sostiene una flor. Un gesto pequeño, casi absurdo frente a la magnitud del desastre, pero profundamente humano. Esa flor no representa la salvación, sino la memoria de lo que fue y la posibilidad de lo que aún podría ser.<br><br>
                    La obra no narra una catástrofe específica; habla de todas. Es un retrato del ser humano después del colapso, cuando la tecnología ya no protege, cuando las ciudades han fallado, y solo queda la capacidad de recordar, cuidar y resistir a través de un acto mínimo: preservar la belleza.<br><br>
                    “La Última Flor” es una escena de pausa en medio del fin, un momento suspendido donde la esperanza no es ingenua, sino consciente de su fragilidad.
\                </p>
                `
            },
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
                secondImg: this.buildUrl("ecos_del_bosque_2.webp"),
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
                dimensions: "120 x 90 cm",
                statement: `
                <p>
                    <strong>El Último Testigo</strong> es una obra que transmite fuerza, contemplación y espiritualidad a través de una escena profundamente simbólica. Javier Revelo presenta al león como una figura ancestral, silenciosa y dominante, contrapuesta a la fragilidad humana, creando una narrativa visual que invita al espectador a reflexionar sobre el respeto, la humildad y la conexión con la naturaleza.<br><br>
                    La riqueza del óleo, las pinceladas expresivas y el manejo de la luz otorgan a la obra una presencia imponente y atemporal, convirtiéndola en una pieza central para coleccionistas que buscan arte con carácter, profundidad conceptual y alto valor estético.
                </p>
                `
            },
            {
                id: 3,
                name: "Entre Piedra y Eternidad",
                description: "Óleo sobre lienzo",
                mainImg: this.buildUrl("cielo.webp"),
                secondImg: this.buildUrl("cielo_2.webp"),
                category: "fisico",
                price: 165,
                oldPrice: 178,
                currency: "€",
                year: 2024,
                dimensions: "80 x 60 cm",
                statement: `
                <p>
                Esta obra al óleo captura un instante de profunda contemplación entre el ser humano y la fuerza invisible de la naturaleza. En el centro de un bosque silencioso, la figura de un hombre permanece inmóvil, observando un remolino que se forma en el cielo, como si el tiempo se suspendiera en ese encuentro.
                </p>
                `
            },
            {
                id: 4,
                name: "Entrega",
                description: "Escultura en arcilla",
                mainImg: this.buildUrl("entrega.webp"),
                secondImg: this.buildUrl("entrega_2.webp"),
                category: "escultura",
                price: 200,
                oldPrice: 210,
                currency: "€",
                year: 2024,
                dimensions: "35 cm (alto) x 15 cm (ancho) x 12 cm (profundidad)",
                statement: `
                <p>
                Escultura en arcilla de mujer alzando manos y cabeza al cielo, símbolo de armonía y conexión espiritual. Hecha a mano, única y perfecta para decorar cualquier espacio.
                </p>
                `
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
                dimensions: "736 x 1288 px",
                statement: `
                <p>
                Post Humanum es una obra de gran fuerza simbólica y estética que reflexiona sobre la fragilidad del mundo contemporáneo y la persistencia de la esperanza incluso en escenarios de colapso total.<br><br>
                La imagen combina una narrativa postapocalíptica con una composición cuidadosamente equilibrada, donde el uso selectivo del color transforma a la flor en un poderoso símbolo de resistencia, memoria y humanidad.
                </p>
                `
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
                currency: "€",
                dimensions: "735 x 1313 px",
                statement: `
                <p>
                Ilustración digital surrealista que muestra un árbol con un ojo observador, encarnando una presencia antigua y atenta que acompaña al espectador sin imponer. La figura que se aproxima parece guiada por una certeza interior, ofreciendo dirección y referencia en un mundo confuso y ruidoso. Una obra que invita a la contemplación y a conectar con lo sagrado de manera sutil, perfecta para coleccionistas de arte digital o decoración creativa.
                </p>
                `
            },
            {
                id: 7,
                name: "Suspensión",
                mainImg: this.buildUrl("suspension.webp"),
                description: "Óleo sobre lienzo",
                category: "fisico",
                price: 150,
                oldPrice: 155,
                year: 2024,
                currency: "€",
                dimensions: "80 x 60 cm",
                statement: `
                <p>
                Una obra elegante y emocional que representa a una mujer flotando en un lago, capturando un momento de calma, misterio y transformación. Sus tonos suaves y su atmósfera envolvente la convierten en una pieza perfecta para aportar profundidad y sofisticación a cualquier espacio.
                </p>
                `
            },
            {
                id: 8,
                name: "Traffic",
                mainImg: this.buildUrl("traffic.webp"),
                description: "Ilustración digital",
                category: "digital",
                price: 8,
                oldPrice: 14,
                year: 2024,
                currency: "€",
                dimensions: "736 x 1308 px",
                statement: `
                <p>
                Adéntrate en un paisaje suspendido en el tiempo con esta imagen digital de alta calidad, que muestra a un viajero avanzando lentamente por un vasto territorio desértico. El camino se abre ante él como una revelación tranquila, guiándolo hacia una arquitectura que trasciende lo físico y evoca un estado de conciencia más profundo.
                </p>
                `
            },
            {
                id: 9,
                name: "Tránsito de lo Invisible",
                mainImg: this.buildUrl("transito_de_lo_invisible.webp"),
                description: "Escultura en arcilla",
                category: "escultura",
                price: 115,
                oldPrice: 130,
                year: 2024,
                currency: "€"
            },
        ];
    }
}
