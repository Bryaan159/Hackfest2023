function getBotResponse(input) {
    const language = detectLanguage(input.toLowerCase());

    if (language === 'english') {
        const responses = {
            "hello": "Hello there!",
            "hi": "Hello there!",
            "Hi": "Hello there!",
            "Hello":"Hello there!",
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
            "hola": "¡Hola que tal en que te puedo ayudar!",
            "Hola": "¡Hola como has estado!",
            "adios": "Hasta luego!",
            "bien": "Me alegro que te encuentres super bien, en que puedo ayudarte",
            "Bien": "Me alegro que te encuentres super bien, en que puedo ayudarte",
            "mal": "No, me digas eso, recuerda un día mal no te define",
            "Mal": "No me digas eso, te ayudare rapido para que te sientas mejor"
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
    const spanishKeywords = ["hola", , "Hola","adios", "bien", "Bien", "super mal", "mal"];

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
