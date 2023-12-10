function getBotResponse(input) {
    const language = detectLanguage(input.toLowerCase());

    if (language === 'english') {
        const responses = {
            "hello": "Hello there!",
            "hi": "Hello there!",
            "Hi": "Hello there!",
            "Hello": "Hello there!",
            "goodbye": "Talk to you later!"
            // Agregar más respuestas en inglés según sea necesario
        };
        if (responses.hasOwnProperty(input)) {
            return responses[input];
        } else {
            return "Try asking something else!";
        }
    } else if (language === 'spanish') {
        const responses = {
            "hola": "¡Hola! ¿Cómo estás? ¿En qué puedo ayudarte?",
            "Hola": "¡Hola! ¿Cómo ha estado tu día?",
            "adios": "¡Hasta luego! Si necesitas algo más, aquí estaré.",
            "bien": "¡Me alegra escuchar eso! ¿En qué puedo ayudarte hoy?",
            "Bien": "¡Me alegra saber que estás bien! ¿En qué puedo ayudarte hoy?",
            "super bien": "¡Me alegra saber que estás bien! ¿En qué puedo ayudarte hoy?",
            "mal": "Lamento escuchar eso. ¿Hay algo en lo que pueda asistirte?",
            "Mal": "No te preocupes, siempre hay formas de mejorar el día. ¿Cómo puedo ayudarte?",
            "catalogo de la nueva coleccion": "<a href='https://acortar.link/n5t0TP' target='_blank'>Catálogo de la nueva colección</a>",
            "quiero comprar una prenda": "¡Genial! ¿Tienes algo específico en mente o necesitas ayuda para encontrar algo?",
            "Tienes camisetas en oferta?": "¡Sí! Tenemos varias camisetas en oferta. ¿Te gustaría ver nuestros modelos?",
            "Me gusta esta camiseta, ¿está disponible en mi talla?": "¡Claro! ¿Podrías decirme tu talla para verificar la disponibilidad?",
            "Cómo puedo realizar la compra?": "Puedes agregar la prenda al carrito y proceder al pago. ¿Necesitas ayuda con eso?",
            "Estoy listo para realizar la compra": "Perfecto. ¿Podrías proporcionarme tus detalles de envío para procesar el pedido?",
            "Tienes descuentos por tiempo limitado?": "¡Sí! Actualmente tenemos descuentos especiales en una amplia gama de prendas. ¿Te gustaría verlas?",
            "Puedo devolver la prenda si no me queda bien?": "Sí, tenemos una política de devolución flexible. ¿Necesitas más detalles?",
            "Qué métodos de pago aceptan?": "Aceptamos tarjetas de crédito, débito y PayPal para facilitar tu compra.",
            "Cuál es el tiempo estimado de entrega?": "El tiempo de entrega depende de tu ubicación. ¿Podrías proporcionarme tu código postal para verificarlo?",
            "Necesito ayuda para elegir un regalo": "¡Claro! Cuéntame un poco más sobre la persona y te ayudaré a encontrar el regalo perfecto.",
            "Tienes alguna promoción especial por cumpleaños?": "¡Sí! Ofrecemos descuentos especiales en el mes de cumpleaños. ¿Te gustaría aprovecharlo?",
            "Están disponibles las nuevas colecciones?": "¡Sí! Acabamos de lanzar nuestras nuevas colecciones. ¿Te gustaría echarles un vistazo?",

        };
        if (responses.hasOwnProperty(input)) {
            return responses[input];
        } else {
            return "Intenta preguntar algo diferente.";
        }
    } else {
        return "No comprendo lo que quieres preguntar, vuelve a intentar nuevamente";
    }
}

function detectLanguage(input) {
    // Ejemplo básico: detectar si la entrada contiene palabras clave en inglés o español
    const englishKeywords = ["hello", "hi", "goodbye"];
    const spanishKeywords = ["hola", "adios", "bien", "super bien", "mal", "quiero comprar una prenda","tienes camisetas en oferta?","catalogo de la nueva coleccion"];

    const inputLowerCase = input.toLowerCase();

    let containsEnglish = false;
    let containsSpanish = false;

    // Verificar si la entrada contiene palabras clave en inglés
    englishKeywords.forEach(keyword => {
        if (inputLowerCase.includes(keyword)) {
            containsEnglish = true;
        }
    });

    // Verificar si la entrada contiene palabras clave en español
    spanishKeywords.forEach(keyword => {
        if (input.includes(keyword)) {
            containsSpanish = true;
        }
    });

    // Determinar el idioma basándose en las palabras clave encontradas
    if (containsEnglish && !containsSpanish) {
        return 'english';
    } else if (!containsEnglish && containsSpanish) {
        return 'spanish';
    } else {
        return 'unknown';
    }
}
