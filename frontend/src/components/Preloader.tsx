'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [phase, setPhase] = useState<'visible' | 'hiding' | 'gone'>('visible');

  useEffect(() => {
    if (sessionStorage.getItem('rs_loaded')) {
      setPhase('gone');
      return;
    }
    const hide = setTimeout(() => {
      setPhase('hiding');
      const remove = setTimeout(() => {
        setPhase('gone');
        sessionStorage.setItem('rs_loaded', '1');
      }, 700);
      return () => clearTimeout(remove);
    }, 2000);
    return () => clearTimeout(hide);
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`rs-preloader${phase === 'hiding' ? ' rs-preloader--out' : ''}`} aria-hidden="true">
      <div className="rs-preloader__inner">
        <div className="rs-preloader__logo">
          <Image src="/images/logo.png" alt="Rank Spiders" width={160} height={44} priority />
        </div>
        <div className="rs-preloader__bar">
          <div className="rs-preloader__progress" />
        </div>
        <p className="rs-preloader__label">Loading your experience…</p>
      </div>

      {/* decorative orbs */}
      <div className="rs-preloader__orb rs-preloader__orb--1" />
      <div className="rs-preloader__orb rs-preloader__orb--2" />
    </div>
  );
}
