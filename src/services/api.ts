const BASE_URL = 'https://api.adviceslip.com/advice';

// Función para obtener un consejo aleatorio  
export const fetchRandomAdvice = async () => {
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

// Función para obtener un consejo por ID  
export const fetchAdviceById = async (slipId: number) => {
    try {
        const response = await fetch(`${BASE_URL}/${slipId}`);
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.error(`Error al obtener el consejo con ID ${slipId}:`, error);
        throw error;
    }
};

// Función para buscar consejos por término
export const searchAdvice = async (query: string) => {
    try {  
        const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
        if (!response.ok) {  
            throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        return data.slips;
    } catch (error) {
        console.error(`Error al buscar consejos con la consulta "${query}":`, error);
        throw error;
    }  
};