import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Homepage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Blog Name</title>
        <meta name="description" content="Your blog description" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Your Blog!</h1>
        <p className={styles.description}>
          Explore a variety of interesting topics through my blog posts.
        </p>
        <Link href="/posts/">Go to Posts</Link>
      </main>
    </div>
  );
}