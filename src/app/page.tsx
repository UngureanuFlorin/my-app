"use client"

import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import BlurFade from "@/components/magicui/blur-fade";
import PulsatingButton from "@/components/ui/pulsating-button";
import "./style.css"

const MyComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlurCompleted, setIsBlurCompleted] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Simula il completamento dell'animazione BlurFade
    const timer = setTimeout(() => {
      setIsBlurCompleted(true);
    }, 1000); // Imposta il timeout in base alla durata dell'effetto BlurFade

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="section"></div>
      <section>
        <div className="body">
          <BlurFade delay={0.25} inView className="blur">
            <div className={`container ${isBlurCompleted ? 'expanded' : ''}`}>
              {isBlurCompleted ? (
                // Mostra il pulsante play/pause quando il blur è completato
                <button className="player bg-gray-100" onClick={togglePlayPause}>
                  {isPlaying ? <FaPlay size={20} color='#1D1D1F' /> : <FaPause size={20} color='#1D1D1F' />}
                </button>
              ) : (
                // Mostra PulsatingButton quando il blur non è ancora completato
                <PulsatingButton className='pulsating-button'><FaPlay size={20} color='#1D1D1F' /></PulsatingButton>
              )}
              {isBlurCompleted && (
                <div className="loader">
                  <div className="loading-bar"></div>
                </div>
              )}
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;