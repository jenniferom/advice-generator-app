import React, { useEffect, useState } from 'react';
import { fetchAdvice } from '../services/api';

const Advice: React.FC = () => {
    const [advice, setAdvice] = useState<string>('');
    const [id, setSlipId] = useState<number | null>(null);

    useEffect(() => {
        const loadAdvice = async () => {
            try {
                const data = await fetchAdvice();
                setAdvice(data.advice);
                setSlipId(data.id);
            } catch (error) {
                console.error("Error al cargar el consejo:", error);
            }
        };
        loadAdvice();
    }, []);

    return (
        <div>
            <h3>Advice #{id}</h3>
            <p>"{advice}"</p>
            
        </div>
    );
};

export default Advice;