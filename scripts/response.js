function getBotResponse(input) {
    const language = detectLanguage(input);

    if (language === 'english') {
        const responses = {
            "hello": "Hello! How are you?",
            "hi":"Hello! How are you?",
            "goodbye": "Goodbye! If you need anything else, I'll be here.",
            "well": "I'm glad to hear that! How can I help you today?",
            "great": "I'm glad to know that you're doing great! How can I assist you today?",
            "bad": "I'm sorry to hear that. Is there anything I can assist you with?",
            "catalog of the new collection": "<a href='https://shorten.link/n5t0TP' target='_blank'>Catalog of the new collection</a>",
            "I want to buy an item": "Great! Do you have something specific in mind or need help finding something?",
            "do you have T-shirts on sale?": "Yes! We have several T-shirts on sale. Would you like to see our models?",
            "yes, I would like to see them": "<a href='https://shorten.link/j1lHDR' target='_blank'>Recommendations</a>",
            "I like the second T-shirt, is it available in my size?": "Sure! Could you tell me your size to check availability?",
            "my size is M": "Great, give me a second, I have to check the stock...",
            "ok then give me 2 shirts": "Okay, I'll save 2 items for you right now",
            "what is the price of each item": "The price of each one is $12.99, as you're taking 2, it would be $25.98",
            "how can I make the purchase?": "You can add the item to the cart and proceed to payment. Do you need help with that?",
            "I'm ready to make the purchase": "Great. Could you provide me with your shipping address to process the order?",
            "perfect, thank you for your help": "It's my pleasure to help you. For any other inquiries, I'm at your service",
            "do you have limited-time discounts?": "Yes! Currently, we have special discounts on a wide range of items. Would you like to see them?",
            "can I return the item if it doesn't fit me?": "Yes, we have a flexible return policy. Do you need more details?",
            "what payment methods do you accept?": "We accept credit cards, debit cards, and PayPal to facilitate your purchase.",
            "what is the estimated delivery time?": "Delivery time depends on your location. Could you provide me with your zip code to check?",
            "are the new collections available?": "Yes! We've just launched our new collections. Would you like to take a look?"
        };
        
        if (responses.hasOwnProperty(input)) {
            return responses[input];
        } else {
            return "Try asking something else!";
        }
    } else if (language === 'spanish') {
        const responses = {
            "hola": "¡Hola! ¿Cómo estás? ¿En qué puedo ayudarte?",
            "adios": "¡Hasta luego! Si necesitas algo más, aquí estaré.",
            "bien": "¡Me alegra escuchar eso! ¿En qué puedo ayudarte hoy?",
            "super bien": "¡Me alegra saber que estás bien! ¿En qué puedo ayudarte hoy?",
            "mal": "Lamento escuchar eso. ¿Hay algo en lo que pueda asistirte?",
            "catalogo de la nueva coleccion": "<a href='https://acortar.link/n5t0TP' target='_blank'>Catálogo de la nueva colección</a>",
            "quiero comprar una prenda": "¡Genial! ¿Tienes algo específico en mente o necesitas ayuda para encontrar algo?",
            "tienes camisetas en oferta?": "¡Sí! Tenemos varias camisetas en oferta. ¿Te gustaría ver nuestros modelos?",
            "si me gustaria verlos":"<a href='https://acortar.link/j1lHDR' target='_blank'>Recomendaciones</a>",
            "me gusta la 2 camiseta, esta disponible en mi talla?": "¡Claro! ¿Podrías decirme tu talla para verificar la disponibilidad?",
            "mi talla es m":"Perfecto, dame un segundo, tengo que verificar en stock...",
            "ok entonces dame 2 camisas":"Ok ahorita guardo 2 prendas para ti",
            "cual es el precio de cada prenda": "El precio de cada una es $12.99 como llevas 2 seria $25.98",
            "como puedo realizar la compra?": "Puedes agregar la prenda al carrito y proceder al pago. ¿Necesitas ayuda con eso?",
            "estoy listo para realizar la compra": "Perfecto. ¿Podrías proporcionarme tus direccion de envío para procesar el pedido?",
            "perfecto gracias por tu ayuda":"Para mi es un placer ayudarte, por cualquier otra consulta estoy a la orden",
            "tienes descuentos por tiempo limitado?": "¡Sí! Actualmente tenemos descuentos especiales en una amplia gama de prendas. ¿Te gustaría verlas?",
            "puedo devolver la prenda si no me queda bien?": "Sí, tenemos una política de devolución flexible. ¿Necesitas más detalles?",
            "que metodos de pago aceptan?": "Aceptamos tarjetas de crédito, débito y PayPal para facilitar tu compra.",
            "Cual es el tiempo estimado de entrega?": "El tiempo de entrega depende de tu ubicación. ¿Podrías proporcionarme tu código postal para verificarlo?",
            "Estan disponibles las nuevas colecciones?": "¡Sí! Acabamos de lanzar nuestras nuevas colecciones. ¿Te gustaría echarles un vistazo?",

        };
        if (responses.hasOwnProperty(input)) {
            return responses[input];
        }else if(input === "mi dirección es san salvador, san marcos"){
            return "¡Genial! ahorita almaceno tu dirección"
        }else if(input === "ok") {
            return "¡Genial! Tengo 15 disponibles en talla M.";
        }else {
            return "Intenta preguntar algo diferente.";
        }  
    } 
    else {
        return "No comprendo lo que quieres preguntar, vuelve a intentar nuevamente";
    }
}

function detectLanguage(input) {
    // Ejemplo básico: detectar si la entrada contiene palabras clave en inglés o español
    const englishKeywords = ["hello", "hi","well","goodbye", "catalog of the new collection", "I want to buy an item", "do you have T-shirts on sale?", "yes, I would like to see them", "I like the second T-shirt, is it available in my size?", "my size is M", "ok then give me 2 shirts", "what is the price of each item", "how can I make the purchase?", "I'm ready to make the purchase", "do you have limited-time discounts?", "can I return the item if it doesn't fit me?", "what payment methods do you accept?", "ok", "my address is San Salvador, San Marcos", "what is the estimated delivery time?", "are the new collections available?", "perfect, thank you for your help"];
    const spanishKeywords = ["hola", "adios", "bien", "super bien", "mal", "quiero comprar una prenda","tienes camisetas en oferta?","catalogo de la nueva coleccion", "si me gustaria verlos", "me gusta la 2 camiseta, esta disponible en mi talla?","mi talla es m", "ok entonces dame 2 camisas", "cual es el precio de cada prenda", "como puedo realizar la compra?", "estoy listo para realizar la compra", "tienes descuentos por tiempo limitado?", "puedo devolver la prenda si no me queda bien?",
    "que metodos de pago aceptan?", "ok","mi direccion es san salvador, san marcos", "cual es el tiempo estimado de entrega?", "estan disponibles las nuevas colecciones?", "perfecto gracias por tu ayuda"];

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
