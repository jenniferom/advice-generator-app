import React, { useEffect, useState } from 'react';
import { fetchRandomAdvice } from '../services/api';

const Advice: React.FC = () => {
    const [advice, setAdvice] = useState<string>('');
    const [slipId, setSlipId] = useState<number | null>(null);

    useEffect(() => {
        const loadAdvice = async () => {
            try {
                const data = await fetchRandomAdvice();
                setAdvice(data.advice);
                setSlipId(data.slip_id);
            } catch (error) {
                console.error("Error al cargar el consejo:", error);
            }
        };

        loadAdvice();
    }, []);

    return (
        <div>
            <h1>Consejo Aleatorio</h1>
            <p>{advice}</p>
            {slipId && <p>ID del consejo: {slipId}</p>}
        </div>
    );
};

export default Advice;