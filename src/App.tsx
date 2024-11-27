import './App.css'
import { useEffect, useState } from 'react';
import { fetchAdvice } from './services/api';


const App: React.FC = () => {
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
    <>
      <div className='container'>
            <h3>Advice #{id}</h3>
            <p>"{advice}"</p>
        </div>
    </>
  )
}

export default App
