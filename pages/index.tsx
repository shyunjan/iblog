import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

const Home: NextPage = (): JSX.Element => {
  const [today, setToday] = useState('1900-01-01 오전 00:00:00');
  useEffect(() => {
    setToday(new Date().toLocaleString());
  }, []);

  return (
    <>
      <main>
        <h4>{`Today: ${today}`}</h4>
        <h4>2</h4>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/assets/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
};

export default Home;
