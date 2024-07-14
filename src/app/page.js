"use client"

import { useEffect, useState } from 'react';
//import styles from '../styles/Home.module.css';

export default function Home() {
  const [phrase, setPhrase] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhrase = async () => {
      try {
        const res = await fetch('https://frasedeldia.azurewebsites.net/api/phrase');
        if (!res.ok) {
          throw new Error('Error al obtener la frase');
        }
        const data = await res.json();
        setPhrase(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPhrase();
  }, []);

  return (
    <div>
      <h1>Frase del Día</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>{phrase ? phrase.text : 'Cargando...'}</p>
      )}
    </div>
  );
}

