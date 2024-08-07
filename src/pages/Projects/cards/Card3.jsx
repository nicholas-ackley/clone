// src/Card.js
import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.8 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  exit: { opacity: 0, y: -50, scale: 0.8, transition: { duration: 0.5 } },
  whileHover: {
    scale: 1.1,
    rotate: 5,
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
    background: [
      'linear-gradient(135deg, #0a0a3b, #1a1a4e)',
      'linear-gradient(135deg, #0b0b40, #0a0a3b)',
      'linear-gradient(135deg, #0d0d54, #1a1a4e)',
    ],
    transition: {
      duration: 0.6,
      yoyo: Infinity,
    },
  },
  whileTap: { scale: 0.9, rotate: -5 },
};

const Card3 = ({ id }) => {
  return (
    <motion.div
      className="card"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <h2>Card {id}</h2>
      <p>This is a cool card animation using framer-motion.</p>
    </motion.div>
  );
};

export default Card3;
