const BASE_URL = 'https://api.adviceslip.com/advice';

export const fetchAdvice = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.error("Error al obtener un consejo aleatorio:", error);
        throw error;
    }
};
