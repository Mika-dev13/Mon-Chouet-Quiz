'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  PauseCircle,
  PlayCircle,
  StopCircle,
  Timer as TimerIcon,
} from 'lucide-react';

const TimerBox = () => {
  const [time, setTime] = useState(120); // Temps de départ en secondes (2 minutes)
  const [isActive, setIsActive] = useState(false); // Indique si le timer est actif
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fonction pour démarrer le décompte
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current!); // Arrête le timer à zéro
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // Décrémente chaque seconde
    }
  };

  // Fonction pour mettre le décompte en pause
  const pauseTimer = () => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Fonction pour réinitialiser le décompte
  const resetTimer = () => {
    pauseTimer();
    setTime(120); // Réinitialise à 120 secondes (2 minutes)
  };

  // Nettoyer l'intervalle lorsque le composant est démonté
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Convertir les secondes en format mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div className='flex gap-4 rounded-md bg-lime-300 px-4 py-2 mb-4'>
        <button
          onClick={startTimer}
          disabled={isActive}
          className='bg-lime-100 p-1 rounded-md'
        >
          <PlayCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>

        <button
          onClick={pauseTimer}
          disabled={!isActive}
          className='bg-lime-100 p-1 rounded-md'
        >
          {' '}
          <PauseCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>
        <button onClick={resetTimer} className='bg-lime-100 p-1 rounded-md'>
          <StopCircle size='36' color='#65a30d' strokeWidth={1} />
        </button>
        <div className='flex gap-4 items-center bg-lime-100 p-1 rounded-md'>
          <div className='w-10 text-right'>
            <p className='font-cursive text-red-500'>{formatTime(time)}</p>
          </div>
          <TimerIcon size='24' color='#ef4444' />
        </div>
      </div>
    </div>
  );
};

export default TimerBox;
