import React from 'react';
import styles from './Home.module.css'

const Home: React.FC = () => (
  <div className="flex flex-col justify-end items-center h-full w-full pointer-events-none">
    <h1 className={`${styles['logo-text']} font-mjgarganisLab text-4xl`}>
      mjgargani&apos;s Lab <span></span>
    </h1>
  </div>
);

export default Home;
