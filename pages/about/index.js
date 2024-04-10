// Import the CSS module
import styles from './index.module.css';
import React from 'react';

// Define your about component
function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>
        Welcome to our blog! We are passionate about sharing knowledge and ideas on various topics
        ranging from technology and science to lifestyle and travel. Our mission is to provide
        valuable insights, tips, and inspiration to our readers.
      </p>
      <p className={styles.paragraph}>
        Our team of writers consists of experts and enthusiasts who are dedicated to delivering
        high-quality content that informs, entertains, and engages our audience.
      </p>
      <p className={styles.paragraph}>
        Whether you&apos;re looking for the latest tech trends, travel destinations, or lifestyle
        advice, you&apos;ll find it all here on our blog. We hope you enjoy exploring our articles and
        join us on this exciting journey!
      </p>
    </div>
  );
}

// Export the About component
export default About;
