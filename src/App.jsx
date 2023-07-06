import React, { useState, useEffect } from 'react';
import Layout from '../views/Layout';
import Head from '../components/Head';
import './App.css';

export function App() {
  const [showLayout, setShowLayout] = useState(false);
  const [fixMain, setFixMain] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 300) {
        setShowLayout(true);
        setFixMain(true);
      } else {
        setShowLayout(false);
        setFixMain(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <Head />
      </section>
      <section className="fixed-main">
        <div className={showLayout ? 'visible' : 'hidden'}>
          {showLayout && <Layout />}
        </div>
      </section>
    </>
  );
}
