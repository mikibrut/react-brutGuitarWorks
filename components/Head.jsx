import React, { useEffect } from 'react';
import './Head.css';

export default function Head() {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);

    const elevator = document.querySelector('.elevator');
    const elevatorL = document.querySelector('.elevatorL');
    const elevatorR = document.querySelector('.elevatorR');

    elevatorL.classList.add('moveDown');
    elevatorR.classList.add('moveUp');

    setTimeout(() => {
      elevatorL.classList.remove('moveDown');
      elevatorR.classList.remove('moveUp');
    }, 1000); // El tiempo de la animación original

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elevator.classList.add('elevator-transition');
          elevatorL.classList.add('elevatorL-transition');
          elevatorR.classList.add('elevatorR-transition');
          return;
        }
        elevator.classList.remove('elevator-transition');
        elevatorL.classList.remove('elevatorL-transition');
        elevatorR.classList.remove('elevatorR-transition');
      });
    });

    observer.observe(elevator);
    observer.observe(elevatorL);
    observer.observe(elevatorR);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="elevator">
      <div className="elevatorL">BRUT</div>
      <div className="elevatorR">GUITAR WORKS</div>
    </div>
  )
}

