import { Card, Container, Typography } from '@material-ui/core';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kera&apos;s Bus Locator</title>
        <meta name='description' content='Bus locator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main style={{ backgroundColor: '#212021', height: '100vh' }}>
        <Container>
          <Typography variant='h4'>IETT Bus Locator</Typography>
          <Typography variant='h5'>Get started by choosing a bus</Typography>

          <Card>
            <Typography variant='h5'>122V</Typography>
          </Card>
        </Container>
      </main>
    </div>
  );
}
