function getBotResponse(input) {
    const language = detectLanguage(input.toLowerCase());

    if (language === 'english') {
        const responses = {
            "hello": "Hello there!",
            "hi": "Hello there!",
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
            "hola": "¡Hola!",
            "adios": "Hasta luego!",
            // Agregar más respuestas en español según sea necesario
        };
        if (responses.hasOwnProperty(input)) {
            return responses[input];
        } else {
            return "Intenta preguntar algo diferente.";
        }
    } else {
        return "Lo siento, no puedo entender ese idioma.";
    }
}

function detectLanguage(input) {
    // Ejemplo básico: detectar si la entrada contiene palabras clave en inglés o español
    const englishKeywords = ["hello", "hi", "goodbye"];
    const spanishKeywords = ["hola", "adios"];

    let containsEnglish = false;
    let containsSpanish = false;

    // Verificar si la entrada contiene palabras clave en inglés
    englishKeywords.forEach(keyword => {
        if (input.includes(keyword)) {
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
